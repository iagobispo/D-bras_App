import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';
import ListProduct from '../../../components/ListProduct';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import asyncStorage from '@react-native-community/async-storage';

import { produtosUsuario } from '../../../store/searches/fetchProdutos';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont()


import Header from '../../../components/header'

import styles from './styles';

function Produto() {

    const produtos = useSelector((state) => state.produtos);//responsavel pelos dados aq sera renderizados no flatlist
    const produtosLoja = useSelector((state) => state.produtosLoja);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadingDados() {
            const lojaId = await asyncStorage.getItem('@RNAuth:lojaId');
            const userId = JSON.parse(await asyncStorage.getItem('@RNAuth:user'));

            if (!lojaId) {
                await asyncStorage.setItem('@RNAuth:lojaId', userId.loja)

            }
            //console.log(await asyncStorage.getItem('@RNAuth:lojaId'), 'ok')
            const idLoja = await asyncStorage.getItem('@RNAuth:lojaId');
            await dispatch(produtosUsuario(idLoja))
            // console.log(idLoja)

        }
        loadingDados()
    }, [dispatch])


    function navigateToAddProdutoPage() {
        navigation.navigate('AddProduto')
    }

    return (
        <>
            <Header title='Produtos' arrowLeft />

            <View style={styles.containerMain}>
                <View style={styles.containerInput}>
                    <TextInput
                        style={{ backgroundColor: '#c4c4c460', width: '100%', height: 30, borderRadius: 5, paddingVertical: 0, paddingHorizontal: 10 }}
                        placeholder='Encontre o seu produto'
                        keyboardType='web-search'

                    />
                        <Icon name="search" size={18} color="#c4c4c4" style={{position: 'absolute', right: 10}} />
                    
                </View>

                <Text>Total de itens ()</Text>


                <View style={styles.main}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={produtosLoja[1]}
                        keyExtractor={(item) => String(item._id)}
                        renderItem={({ item }) => <ListProduct props={item} />}
                    />

                </View>

                <TouchableOpacity style={{width: 50, height: 50, borderRadius: 50, backgroundColor: '#41e6be', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 30,  right: 30}} onPress={navigateToAddProdutoPage}>
                    <Icon name="add" size={28} color="#fff" />
                </TouchableOpacity>

            </View>

        </>
    )
}

export default Produto;
