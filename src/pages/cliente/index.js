import React from 'react';
import { View, TouchableOpacity, TextInput} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Amount from '../../components/Amount';

import { useSelector } from 'react-redux'

import styles from './styles';

function Cliente() {
    const cartLength = useSelector((state) => state.cart.length)

    return(
        <View style={styles.container}>
             <View style={styles.containerHeader}>

                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.button} >
                         <EvilIcons style={{paddingLeft: 10}} name="search" size={24} color="black" />
                    </TouchableOpacity>

                    <TextInput style={styles.textInput} placeholder='Bucar no De-Brás'></TextInput>

                    <TouchableOpacity style={{ marginLeft: 15 }} >
                    <Amount left={15} top={-10} length={cartLength}/>
                    <EvilIcons name="cart" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.containerCategories}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.categoriesText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.categoriesText}>Roupas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.categoriesText}>Calçados</Text>
                    </TouchableOpacity>

                </View> */}
            </View>

        </View>
    )
}

export default Cliente;