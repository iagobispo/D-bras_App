import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';


function ListProduct({props}){
    return(
        <>
            <View style={styles.containerProduct}>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={{uri: props.url[0]}}/>
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.textTitle}>{props.titulo}</Text>
                    <Text style={styles.textPrice}>Preço: {props.preco}</Text>
                </View>

                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttonEdit}>
                        <Text>
                            <AntDesign name="edit" size={20} color="#fff" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}
 
export default ListProduct;