import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';//importando para navegação
import asyncStorage from '@react-native-community/async-storage';

import Header from '../../components/header'; 
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import { logout } from '../../store/ducks/auth';


function Options(){
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.auth)

    const navigation = useNavigation();//variavel para navegação em paginas

    function navigateToLoginPage(){  // função para nevegaçao da pagina
        navigation.navigate('Login')
    }

    function navigateToHomePage(){  // função para nevegaçao da pagina
        navigation.navigate('Home')
    }

    function navigateToProdutosPage(){
        navigation.navigate('Produto')
    }

    function navigateToRegisterLojaPage(){
        navigation.navigate('RegisterLoja')
    }

    return(
        <>
            <Header title='Opções'/>

            <View style={styles.container}>
                
                <View style={styles.containerOptionsVisitante}>
                    <TouchableOpacity onPress={navigateToLoginPage} style={styles.buttonOptions}><Text style={styles.optionText}>Login</Text></TouchableOpacity>
                </View>

                <View style={styles.containerOptionsCliente}>
                    <TouchableOpacity><Text style={styles.optionText} >Compras</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.optionText}>Endereços</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.optionText}>Favoritos</Text></TouchableOpacity>
                    <TouchableOpacity onPress={navigateToRegisterLojaPage}><Text style={styles.optionText}>Vender</Text></TouchableOpacity>

                    <View style={styles.containerOptionsVendedor}>
                    <TouchableOpacity onPress={navigateToProdutosPage}><Text style={styles.optionText}>Produtos</Text></TouchableOpacity>
                    </View>

                    { isAuthenticated && <TouchableOpacity onPress={() => {
                        dispatch(logout())
                         asyncStorage.clear()
                    }}>
                        <Text style={styles.optionText}>Sair</Text>
                    </TouchableOpacity>}

                </View>

            </View>
        </>
    )
}

export default Options;