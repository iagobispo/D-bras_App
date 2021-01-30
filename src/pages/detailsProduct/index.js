import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/header';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'

import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles'
import Slide from '../../components/Slide';

function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item

    const [showContainerDescription, setShowContainerDescription] = useState(false)
    const [nameIcon, setNameIcon] = useState('arrow-expand')

    function showHideContainerDescription() {
        if (showContainerDescription == false) {
            setShowContainerDescription(true)
            setNameIcon('arrow-collapse')
        } else if (showContainerDescription == true) {
            setShowContainerDescription(false)
            setNameIcon('arrow-expand')
        }
    }

    return (
        <>
            <Header title='Detalhes' />

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

                {/* <View style={{alignItems: 'center', marginTop: 15, width: '100%',paddingHorizontal: 15, aspectRatio:3/3, borderRadius: 10}}>
                        <Image style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 10, borderRadius: 20}}source={{uri: item.url[0]}} />
                    </View> */}
                
                    {/* <View style={{
                       // backgroundColor: 'red',
                        alignItems: 'center',
                        marginTop: 15,
                        width: '100%',
                        paddingHorizontal: 15,
                        //aspectRatio: 3 / 3,
                        borderRadius: 10,
                        alignItems: 'center',
                    }}
                    >    */}
                        <Slide image={item.url} />
  
                    {/* </View> */}
               

                <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 16, marginTop: 16 }}>{item.titulo}</Text>

                <Text style={{ fontSize: 30, marginLeft: 16, marginTop: 25 }}>{item.preco}</Text>

                <TouchableOpacity onPress={showHideContainerDescription} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, marginTop: 10, backgroundColor: 'black', borderRadius: 8, height: 35, paddingHorizontal: 15 }}>
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: '200' }}>Descrição do produto</Text>
                    <MaterialCommunityIcons name={nameIcon} size={24} color="#fff" />
                </TouchableOpacity>

                {showContainerDescription &&
                    <View style={{ minHeight: 100, marginTop: 15, marginHorizontal: 15, borderRadius: 8, borderWidth: 0.5, borderColor: '#667', alignItems: 'center', justifyContent: 'center', padding: 15 }}>
                        <Text style={{ fontSize: 20, }}>{item.descricao}</Text>
                        <MaterialCommunityIcons name="arrow-collapse" size={24} color="black" />
                    </View>
                }

            </ScrollView>
        </>
    )
}

export default Detail;

