import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Amount from '../../components/Amount';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux'

import styles from './styles';

const endereco = "Entregar em - AV. Conde de Monte Cristo, 1001,  08670-020"

function Cliente() {
    const cartLength = useSelector((state) => state.cart.length)

    const navigation = useNavigation();

    function navigationToCartPage() {
        navigation.navigate('Cart');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>

                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.button} >
                        <EvilIcons name="search" style={styles.iconSearch} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TextInput style={styles.textInput} placeholder='Bucar no D-Brás' keyboardType='web-search' ></TextInput>

                        <TouchableOpacity style={{}} onPress={navigationToCartPage}>
                            <Amount left={15} top={-10} length={cartLength} />
                            <EvilIcons name="cart" style={styles.iconCar} />
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity style={styles.containerEndereco}>
                    <MaterialCommunityIcons name="map-marker-outline" style={styles.iconPoint} />
                    <Text style={styles.textEndereco}>{endereco}</Text>
                    <MaterialCommunityIcons name="chevron-right" style={styles.iconArrow} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Cliente;