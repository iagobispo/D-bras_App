import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';//importando para navegação
import asyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { logout } from '../../store/ducks/auth';


function Options() {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(state => state.auth)

    const navigation = useNavigation();//variavel para navegação em paginas

    function navigateToPage(page) {  // função para nevegaçao da pagina
         navigation.navigate(page)
    }


    return (
        <>
            <Header title='Opções' />

            <View style={styles.container}>


                <View style={styles.containerOptionsCliente} onPress={()=> navigateToPage('Home')}>
                    <TouchableOpacity style={styles.containerBtn}>
                        <MaterialCommunityIcons name={'home-outline'} style={styles.icon} />
                        <Text style={styles.optionText} >Inicio</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.containerBtn} onPress={()=> navigateToPage('Login')}>
                        <MaterialCommunityIcons name={'account-circle-outline'} style={styles.icon} />
                        <Text style={styles.optionText}>Login</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.containerBtn} onPress={()=>{navigateToPage('Login')}}>
                        <MaterialCommunityIcons name={'shopping-outline'} style={styles.icon} />
                        <Text style={styles.optionText} >Compras</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerBtn} onPress={()=>{navigateToPage('Login')}}>
                        <MaterialCommunityIcons name={'map-marker-outline'} style={styles.icon} />
                        <Text style={styles.optionText}>Endereços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerBtn} onPress={()=>{navigateToPage('Login')}}>
                        <MaterialCommunityIcons name={'heart-outline'} style={styles.icon} />
                        <Text style={styles.optionText}>Favoritos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerBtn} onPress={()=>{navigateToPage('Login')}}>
                        <MaterialCommunityIcons name={'tag-multiple-outline'} style={styles.icon} />
                        <Text style={styles.optionText}>Vender</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerBtn} onPress={()=>{navigateToPage('Login')}}>
                        <MaterialCommunityIcons name={'cart-outline'} style={styles.icon} />
                        <Text style={styles.optionText}>Carrinho</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.containerBtn} onPress={()=>{navigateToPage('Produto')}}>
                        <MaterialCommunityIcons name={'package-variant-closed'} style={styles.icon} />
                        <Text style={styles.optionText}>Produtos</Text>
                    </TouchableOpacity>


                    {isAuthenticated && <TouchableOpacity style={styles.containerBtn}  onPress={() => {
                        dispatch(logout())
                        asyncStorage.clear()
                    }}>
                    <MaterialCommunityIcons name={'login-variant'} style={styles.icon} />
                        <Text style={styles.optionText}>Sair</Text>
                    </TouchableOpacity>}

                </View>

            </View>
        </>
    )
}

export default Options;