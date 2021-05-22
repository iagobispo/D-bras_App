import React from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';//importando para navegação

import styles from './styles';


function ListProduct({ props }) {

    const navigation = useNavigation();//variavel para navegação em paginas

    function navigateToEditProductPage() {  // função para nevegaçao da pagina
        navigation.navigate('EditProdut', { props })
    }
    return (

        <View style={styles.containerProduct}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: props.url[0] }} />
            </View>
            <View style={styles.containerText}>
                <View>
                    <Text style={styles.textTitle}>{props.titulo}</Text>
                    <Text style={styles.textDescription}>{props.descricao}</Text>
                </View>
                <Text style={styles.textPrice}>Preço: {props.preco}</Text>
            </View>


            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonEdit} onPress={() => navigateToEditProductPage()}>
                    <Text>
                        <MaterialCommunityIcons name="pencil-outline" size={20} color="#323232" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default ListProduct;