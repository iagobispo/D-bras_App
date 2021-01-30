import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';
import ListProduct from '../../../components/ListProduct';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import asyncStorage from '@react-native-community/async-storage';

import { produtosUsuario } from '../../../store/searches/fetchProdutos';

import  Icon from 'react-native-vector-icons/MaterialIcons';
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
    },[dispatch])

    function navigateToHomePage() {
        navigation.navigate('Home')
    }

    function navigateToAddProdutoPage() {
        navigation.navigate('AddProduto')
    }

    return (
        <>
            <Header title='Produtos' />

            <View style={styles.containerMain}>
                <View style={styles.containerInput}>
                    <TextInput
                        style={{ backgroundColor: '#fff', width: '80%', height: 30, textAlign: 'center', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}
                        placeholder='Encontre o seu produto'
                    />

                    <TouchableOpacity style={styles.buttonSearch}>
                        <Icon  name="search" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                 <View style={styles.main}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={produtosLoja[1]}
                        keyExtractor={(item) => String(item._id)}
                        renderItem={({ item }) => <ListProduct props={item} />}
                    />

                </View>



                {/* <TouchableOpacity style={{width: 100, height: 200, backgroundColor: 'red'}} onPress={()=>{
                    console.log(produtosLoja[0])
                }}>
                </TouchableOpacity> */}

            </View>

            <View style={styles.footer}>

                <TouchableOpacity style={styles.buttonfooter} onPress={navigateToHomePage}>
                    <Icon name="keyboard-backspace" size={20} color='#fff' />
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonfooter} onPress={navigateToAddProdutoPage}>
                    <Icon name="add-circle-outline" size={20} color="#fff" />
                    <Text style={styles.textButton}>Adicionar</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default Produto;
