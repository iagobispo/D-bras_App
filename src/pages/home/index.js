import React, { useEffect } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { allProdutos } from '../../store/searches/fetchProdutos';
import asyncStorage from '@react-native-community/async-storage';
import { logado } from '../../store/ducks/auth';

import { addItem } from '../../store/ducks/cart';

import Cliente from '../../pages/cliente';

import styles from './styles';
import Produtos from '../../components/ListProdutoHome';

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

    return (
        <View style={styles.container}>

            <Cliente />
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