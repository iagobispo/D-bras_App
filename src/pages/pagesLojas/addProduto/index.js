import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';

import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

//import ImagePicker from 'react-native-image-crop-picker';

import { allCategories } from '../../../store/searches/fetchCategorias';
import { criarProduto } from '../../../store/searches/fetchProdutos';

import { useSelector, useDispatch } from 'react-redux'

import Header from '../../../components/header';
import styles from './styles';


function AddProduct() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagens, setImagens] = useState([])


    const categorias = useSelector((state) => state.categorias);

    const dispatch = useDispatch();// atribuindo a funçao useDispatch em uma variavel

    const navigation = useNavigation();

    const [showCategoria, setShowCategoria] = useState(true);// variavel para mostrar e esconder opçoes de categorias
    const [showContainerAddProduct, setShowContainerAddProduct] = useState(false);
    const [showContainerAddPhotos, setshowContainerAddPhotos ] = useState(false);


    const [id, setId] = useState();

    const [titulo, setTitulo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [sku, setSku] = useState('');
    const [categoria, setCategoria] = useState('');

    const [idProduto, setIdProduto] = useState(null);

    // ImagePicker.openPicker({
    //     multiple: true
    //   }).then(images => {
    //     console.log(images);
    //   });

    function navigateToHomePage() { //funçao para voltar a pagina 
        navigation.navigate('Home')
    }

    function hideCategoria(valor) { // funçao para esconder as opçoes de categorias e setar os valores do id e do nome da categoria selecionada
        setShowCategoria(false)

        setId(Number(valor._id));
        setCategoria(valor._id);
        setShowContainerAddProduct(true)
    }

    async function productRegister() {

        // if (nomeProduto == '') {
        //     return alert('Informe o nome do produto')
        // } else if (quantidade == '') {
        //     return alert('Informe a quantidade disponível')
        // } else if (preco == '') {
        //     return alert('Informe o preço do produto')
        // } else if (url == '') {
        //     return alert('Adicione uma imagem do seu produto com uma url')
        // } else if (descricao == '') {
        //     return alert('Adicione uma descrição para o seu produto')
        // }


        const data = {
            titulo,
            //quantidade,
            preco,
            descricao,
            categoria,
            sku

        }
        const resposta = await dispatch(criarProduto(data))
        await setIdProduto(resposta.data.produto._id)
    

        if (resposta.status === 200) {
            setshowContainerAddPhotos(true)
            setShowContainerAddProduct(false)
        }


        // setDescricao('');
        // setTitulo('');
        // setSku('');
        // setPreco('');
        // setQuantidade('');

    }



    useEffect(() => {

        dispatch(allCategories());

    }, [dispatch])




    return (
        <>
            <Header title='Adicionar Produtos' />

            <View style={{ flex: 1, }} >

                {// opçoes para escolher a categoria
                    showCategoria &&
                    <View style={styles.container}>
                        <View style={styles.containerOptions}>
                            <Text style={styles.textTitleOptions}>Escolha a categoria</Text>
                        </View>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={categorias}
                            keyExtractor={(item) => String(item._id)}
                            renderItem={({ item }) => <TouchableOpacity
                                onPress={function test() { hideCategoria(item) }}>
                                <Text style={{ fontSize: 33, marginTop: 10 }}>{item.nome}</Text>
                            </TouchableOpacity>}
                        />
                    </View>
                }

                {showContainerAddProduct &&
                    <>
                        {/* <View style={{ alignItems: 'center' }}>
                             <Text style={{ color: 'black', fontSize: 11 }}>{categoria}</Text> 
                        </View> */}

                        <KeyboardAvoidingView style={{ alignItems: 'center', flex: 1, justifyContent: 'space-evenly' }}>

                            <View style = {{width: '80%'}}>
                                <TextInput
                                    style={{ height: 35, backgroundColor: '#fff', borderRadius: 5, marginTop: '10%', paddingLeft: 15 }}
                                    placeholder='Nome...'
                                    value={titulo}
                                    onChangeText={(test) => setTitulo(test)}
                                />

                                <TextInput
                                    style={{  height: 35, backgroundColor: '#fff', borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='preço...'
                                    keyboardType='numeric'
                                    value={preco}
                                    onChangeText={(test) => setPreco(Number((test).replace(',', '.')))}
                                />

                                <TextInput
                                    style={{ height: 35, backgroundColor: '#fff', borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='Quantidade...'
                                    keyboardType='numeric'
                                    value={quantidade}
                                    onChangeText={(test) => setQuantidade(parseInt(test))}
                                />

                                <TextInput
                                    style={{ height: 35, backgroundColor: '#fff', borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='Sku'
                                    value={sku}
                                    onChangeText={(test) => setSku(test)}
                                />


                                <TextInput
                                    style={{ backgroundColor: '#fff', minHeight: 50, borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='Descrição...'
                                    numberOfLines={4}
                                    multiline={true}
                                    value={descricao}
                                    onChangeText={(test) => setDescricao((test).toString())}
                                />
                            </View>




                            {selectedImage !== null &&

                                <View style={{ flexDirection: 'row' }}>
                                    < FlatList
                                        horizontal
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                        data={imagens}
                                        keyExtractor={(item) => String(item.id)}
                                        renderItem={({ item }) => <View style={{ width: 100, height: 100, margin: 10 }}><Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: item.url }} /></View>}
                                    />

                                </View>

                            }


                            <TouchableOpacity style={{ height: 30, alignItems: 'flex-end', justifyContent: 'center', width: '80%', borderRadius: 10 }} onPress={productRegister}>
                                <Text style={{ color: 'black', fontSize: 20 }}>Proximo</Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>

                    </>
                }

                { showContainerAddPhotos && 
                    <View style={{flex: 1, backgroundColor: 'red'}}>
                        <TouchableOpacity onPress={()=>{}}>
                            <Text>teste</Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>


            <View style={styles.footer}>

                <TouchableOpacity style={styles.buttonfooter} onPress={navigateToHomePage} >
                    <MaterialIcons name="cancel" size={20} color='#fff' />
                    <Text style={styles.textButton}>Cancelar</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}



export default AddProduct;


