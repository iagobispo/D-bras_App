import React, { useEffect } from 'react';
import { FlatList, View, TouchableOpacity, Image, Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { allProdutos } from '../../store/searches/fetchProdutos';
import asyncStorage from '@react-native-community/async-storage';
import { logado } from '../../store/ducks/auth';

import { addItem } from '../../store/ducks/cart';

import Cliente from '../../pages/cliente';

import styles from './styles';
import Produtos from '../../components/ListProdutoHome';
import categorias from '../../store/ducks/categorias';

function Home() {

    const produtos = useSelector((state) => state.produtos)
    const dispatch = useDispatch()

    useEffect(() => {
        async function loadStorageData() {

            const auth = await asyncStorage.getItem('@RNAuth:auth')
            if (auth === 'authenticated') {
                await dispatch(logado())
                console.log(auth)
            }
            await dispatch(allProdutos())

        }

        loadStorageData()

    }, [dispatch]
    );

    const colunas = 2

    function addItemCart(item) {
        dispatch(addItem(item));
    }

    function teste(itemmm) {
        console.log(itemmm[2].descricao)
    }

    function Category({props}) {
        return (
            <TouchableOpacity style={styles.containerCategory}>
                <Image style={styles.styleImage} source={{ uri: props.url }} />
                <Text style={styles.textTitle}>{props.title}</Text>
            </TouchableOpacity>
        )

    }

    const categorias = [
        {
            id: 1,
            title: 'Calças',
            url: 'https://http2.mlstatic.com/D_NQ_NP_610344-MLB31136389967_062019-O.jpg'
        },
        {
            id: 2,
            title: 'Infantil',
            url: 'http://f.i.uol.com.br/folha/saopaulo/images/17006328.jpeg'
        },
        {
            id: 3,
            title: 'Calçados',
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-vaporfly-4-percent-flyknit-3812-1535127483.jpg'
        },
        {
            id: 4,
            title: 'Camisas',
            url: 'https://vbcamisetas.com.br/wp-content/uploads/2020/08/Design-sem-nome-46.png'
        },
        {
            id: 5,
            title: 'Acessorios',
            url: 'https://blog.hiroshima.com.br/wp-content/uploads/2018/06/acessorios.jpg'
        },
        {
            id: 6,
            title: 'Bermudas',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94iULNIGmylCe-9lAvq1b61wCQ8wq81tNEg&usqp=CAU'
        },
        {
            id: 7,
            title: 'Calças',
            url: 'https://http2.mlstatic.com/D_NQ_NP_954460-MLB32249511528_092019-O.jpg'
        },
        {
            id: 8,
            title: 'Bermudas',
            url: 'https://http2.mlstatic.com/D_NQ_NP_954460-MLB32249511528_092019-O.jpg'
        }
    ]

    return (
        <View style={styles.container}>
            <Cliente />
            <FlatList
                // style={{marginLeft: 13, marginRight: 13}}
                style={styles.category}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categorias}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Category props={item}/>}
            />
            
            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={produtos}
                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => <Produtos item={item} addItemCard={addItemCart} />}
                numColumns={colunas}
                
            />

            {/* <TouchableOpacity onPress={() => teste(produtos)} style={{backgroundColor: 'red', width: 150, height: 160}}>

            </TouchableOpacity> */}



        </View>



    )
}

export default Home;

