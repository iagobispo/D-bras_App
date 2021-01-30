import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Header(props){
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.titleText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader:{
        backgroundColor:'black',
        flexDirection: 'row',
        height:70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18,
        paddingTop: 15
    },

    titleText:{
        color: '#fff',
        fontSize: 20

    },
})

export default Header;