import React from 'react';
import { Text, View } from 'react-native'; 

function Amount({length, left, top}){

    return(
        <View 
            style={{width: 12, 
            height: 13, 
            backgroundColor: 'red', 
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            position: 'absolute',
            left: left,
            top: top
            
        }}>
            <Text style={{color:'#fff', fontSize: 10}}>{length}</Text>
        </View>
    )
}

export default Amount;