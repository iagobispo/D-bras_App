import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 
import EStyleSheet from 'react-native-extended-stylesheet'; 

import { useNavigation } from '@react-navigation/native';


function Header(props) {
    const navigation = useNavigation();
    function navigationTogoBackPage() {
        navigation.goBack()
    }
    return (
        <View style={styles.containerHeader}>
            {props.arrowLeft &&
                <TouchableOpacity style={styles.containerButton} onPress={()=>navigationTogoBackPage()}>
                    <MaterialCommunityIcons name={'chevron-left'}  style={styles.icon} />
                </TouchableOpacity>
            }
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    containerHeader: {
        backgroundColor: '$white',
        flexDirection: 'row',
        borderBottomWidth: '0.063rem',
        borderColor: '$dark',
        height: '3rem',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingHorizontal: 18,
        //paddingTop: 15

    },

    titleText: {
        color: '$dark',
        fontSize: '$span'

    },

    icon: {
        color: '$dark',
        fontSize: '1.5rem'
    },

    containerButton:{
        position: 'absolute', left: '0.813rem'
    }
})

export default Header;