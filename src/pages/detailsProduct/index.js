import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Header from '../../components/header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../../store/ducks/favoriteHeart';

import styles from './styles'
import Slide from '../../components/Slide';

function Detail() {
    const dispatch = useDispatch()

    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item

    const [color, setcor] = useState([]);
    const [sizeProdut, setSizeProduct] = useState([]);

    const [showContainerDescription, setShowContainerDescription] = useState(false)
    const [nameIcon, setNameIcon] = useState('arrow-expand')

    function showHideContainerDescription() {
        if (showContainerDescription == false) {
            setShowContainerDescription(true)
            setNameIcon('arrow-collapse')
        } else if (showContainerDescription == true) {
            setShowContainerDescription(false)
            setNameIcon('arrow-expand')
        }
    }

    function addItemFavorite(favoriteItem) {
        dispatch(addFavorite(favoriteItem))

    }

    function ColorProduct({ props }) {
        function colorSelect(itemColor) {
            // const existItem = state.some(item => item._id === car)
            const existe = itemColor.some(itemn => itemn.id === props.id)

            if (existe) {
                return setcor([...itemColor.filter((iten) => iten.id !== props.id)])
                // return console.log(existe)
            }

            return setcor([props])

        }


        return (
            <TouchableOpacity onPress={() => colorSelect(color)}
                style={props.color === '#fff' ? { width: 25, height: 25, backgroundColor: props.color, borderRadius: 50, borderWidth: 1, borderColor: '#424242', marginRight: 10 } : { width: 25, height: 25, backgroundColor: props.color, borderRadius: 50, marginRight: 10 }}>
                {color.some(value => value.id === props.id) ? <MaterialCommunityIcons style={{ position: 'absolute', right: -10, top: -2 }} name="check-circle" size={15} color="green" /> : false}
            </TouchableOpacity>
        )
    }

    function RenderSizeSelect(props) {

        function itemSizeSelect(itemProps) {
            setSizeProduct([itemProps])
            return console.log(sizeProdut === props)

        }

        return (
            <TouchableOpacity
                onPress={() => itemSizeSelect(props)}
                style={sizeProdut.some(itemSize => itemSize === props) ? { width: 75, height: 30, borderWidth: 1, borderColor: '#c4c4c4', alignItems: 'center', justifyContent: 'center', marginRight: 10, backgroundColor: "#323232" } : { width: 75, height: 30, borderWidth: 1, borderColor: '#c4c4c4', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                <Text style={sizeProdut.some(itemSize => itemSize === props) ? { color: '#fff' } : { color: '#323232' }}>{props.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <Header title='Detalhes' />

            <View style={{ backgroundColor: '#fff', height: '100%', paddingHorizontal: 20 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <Slide itemUrl={item}/>

                  
                  

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#323232' }}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</Text>
                            <Text style={{ fontSize: 21.32, color: '#323232' }}>{item.titulo}</Text>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => addItemFavorite(item)} style={{}}>
                                <MaterialCommunityIcons style={{}} name="heart-plus-outline" size={27} color="#c2c2c2" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#424242', marginTop: 10, paddingBottom: 10 }}>
                        <Text style={{ marginTop: 5, marginBottom: 10, fontSize: 12 }}>Selecione a cor desejada</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={cor}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => <ColorProduct props={item} />}

                        />
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#424242', marginTop: 5, paddingBottom: 10 }}>
                        <Text style={{ color: '#323232', fontSize: 12, marginBottom: 10 }}>Selecione o tamanho</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={tamanho}
                            keyExtractor={(item) => String(item.id)}
                            renderItem={({ item }) => RenderSizeSelect(item)}
                        />
                    </View>


                    <TouchableOpacity onPress={showHideContainerDescription} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', borderRadius: 5, height: 35 }}>
                        <Text style={{ fontSize: 16, color: '#323232', fontWeight: 'bold' }}>Descrição do produto</Text>
                        <MaterialCommunityIcons name={nameIcon} size={20} color="#323232" />
                    </TouchableOpacity>

                    {showContainerDescription &&
                        <View style={{ minHeight: 100, marginTop: 15, borderRadius: 5, borderWidth: 0.5, borderColor: '#c4c4c4' }}>
                            <Text style={{ fontSize: 18, textAlign: 'center', color: '#323232' }}>{item.descricao}</Text>
                        </View>
                    }

                    <View style={{ borderColor: '#323232', borderTopWidth: 1, marginTop: 5 }}></View>
                    <Text style={{ marginTop: 5, marginBottom: 15, fontSize: 16, color: '#323232', fontWeight: 'bold' }}>Você tambem pode gostar</Text>

                    <FlatList
                        data={semelhantes}
                        horizontal={true}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ marginRight: 10, width: 84, marginBottom: 100, borderRadius: 5, borderColor: '#c4c4c4', borderWidth: 1, }}>
                                <View style={{ height: 94 }}>
                                    <Image style={{ height: 94, borderRadius: 5, resizeMode: 'cover' }} source={{ uri: item.url }} />
                                </View>
                                <Text style={{ color: '#323232', fontSize: 9 }}>{item.title}</Text>
                                <Text style={{ color: '#323232', fontSize: 12, fontWeight: 'bold' }}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</Text>
                            </TouchableOpacity>}
                    />


                </ScrollView>

            </View>

            <View style={{ alignSelf: 'center', flexDirection: 'row', position: 'absolute', bottom: 14, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ height: 35, backgroundColor: '#41E6BE80', paddingHorizontal: 14, borderBottomLeftRadius: 5, borderTopLeftRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Comprar agora</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log(color)} style={{ height: 35, backgroundColor: '#42424280', paddingHorizontal: 14, borderBottomRightRadius: 5, borderTopRightRadius: 5, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: '#fff' }}>Adicionar ao carrinho</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


const cor = [
    {
        id: 1,
        color: '#06339B',
        title: 'azul'
    },
    {
        id: 2,
        color: 'red',
        title: 'vermelho'
    },
    {
        id: 3,
        color: 'black',
        title: 'preto'
    },
    {
        id: 4,
        color: '#fff',
        title: 'branco'
    },
    {
        id: 5,
        color: '#FF9900',
        title: 'laranja'
    }
];

const tamanho = [
    {
        id: 1,
        title: 'pp'
    },
    {
        id: 2,
        title: 'p'
    },
    {
        id: 3,
        title: 'm'
    },
    {
        id: 4,
        title: 'g'
    },
    {
        id: 5,
        title: 'gg'
    }
];

const semelhantes = [
    {
        id: 1,
        url: 'https://cdn.awsli.com.br/600x1000/78/78481/produto/50003026/c78618d281.jpg',
        title: 'camisa social',
        preco: 55.80
    },
    {
        id: 2,
        url: 'https://static3.tcdn.com.br/img/img_prod/808191/camisa_regata_adidas_mh_bos_tank_masculino_branco_7409_1_20200825121101.jpg',
        title: 'camisa regata',
        preco: 42.50
    },
    {
        id: 3,
        url: 'https://images2.marisa.com.br/medias/sys_master/images/images/h07/h2e/11994344980510/Camisa-Masculina-Sarja-Bolsos-Manga-Longa-MR-10037469894-C1.jpg',
        title: 'camisa masculina',
        preco: 65.80
    },
    {
        id: 4,
        url: 'https://images-na.ssl-images-amazon.com/images/I/31%2B8fWJs-8L._AC_.jpg',
        title: 'blusa',
        preco: 130.90
    },
    {
        id: 5,
        url: 'https://fieroshop.vteximg.com.br/arquivos/ids/171025-1400-1400/como-usar-casacos-no-inverno.jpg?v=637393305326830000',
        title: 'casaco',
        preco: 85.80
    }
]


export default Detail;

