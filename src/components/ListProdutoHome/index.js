import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';

 import carplus from '../../../src/assets/image/icons/cart-plus.png';

 import {useNavigation} from '@react-navigation/native'

 import styles from './styles';

function Produtos({item, addItemCard}) { 
    const navigation = useNavigation(); 

    function pageDeatils(item){
        navigation.navigate('Detail', {item})
    }
  
            return (
                    <>
                        
                            <View style={styles.containerProdutos} >

                                <TouchableOpacity style={{width: 130, height: 150}} onPress={() => pageDeatils(item)}>
                                <Image style={styles.imageProduto} source={{uri: item.url[0]}} />
                                </TouchableOpacity>

                                <Text style={styles.nameText}>{item.titulo}</Text>
                                <Text style={styles.priceText}>{item.preco}</Text>
                            
                                <View style={styles.containerButtonsProdutos}>
                                    <TouchableOpacity style={styles.containerCompra}>
                                        <Text style={styles.buttonTextCompar}>Compar</Text>
                                    </TouchableOpacity>
                        
                                    <TouchableOpacity style={styles.containerCartPlus} onPress={() => addItemCard(item)} >
                                        <Image style={styles.imageCarPlus} source={carplus} />
                                    </TouchableOpacity>
                        
                                </View>
                            </View> 
                        
                    </>
            
                        
                    )}

export default Produtos;




