import React from 'react'; 
import { View, Image, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useNavigation } from '@react-navigation/native'

import styles from './styles';

function Produtos({ item, addItemCard }) {
    const navigation = useNavigation();

    function pageDeatils(item) {
        navigation.navigate('Detail', { item })
    }

    function limitsText(text) {
        if (text.length < 20) {
            return text
        }

        return `${text.substring(0, 20)}...`;
    }
    
    return (
        <>
            <View style={styles.containerProdutos} >


                <TouchableOpacity style={styles.containerImage} onPress={() => pageDeatils(item)}>
                    <Image style={styles.imageProduto} source={{ uri: item.url[0] }} />
                </TouchableOpacity>

                <View style={styles.containerText}>
                    <Text style={styles.nameText}>{item.titulo}</Text>
                    <Text style={styles.descriptionText}>{limitsText(item.descricao)}</Text>

                    <View style={styles.containerButtonsProdutos}>

                    <Text style={styles.priceText}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(item.preco)}</Text>

                    <TouchableOpacity style={styles.containerCartPlus} onPress={() => addItemCard(item)} >
                        <MaterialCommunityIcons name='cart-plus' style={styles.iconCarPlus}/>
                    </TouchableOpacity> 
                </View>
                </View>

                
            </View>

        </>


    )
}

export default Produtos;




