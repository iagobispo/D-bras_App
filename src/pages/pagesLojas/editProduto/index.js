import React, {useEffect, useState} from 'react';

import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import slide from '../../../components/Slide';

function editProduct({ route }) {
    const { props } = route.params;

    const [images, setImages] = useState([])


    async function convertArrey(item){
       
        let img = []

        for(let i = 0; i < item.url.length; i++){
        
            img.push({
                id: [i],
                url: item.url[i]
            })
            
        }

        await setImages(img)
        
    }

    useEffect(()=>{
        convertArrey(props)
    },[])

    return (
        <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>

            <View style={{ width: '100%' }}>
                <FlatList
                    style={{ paddingHorizontal: 10, width: '100%', alignContent: 'center' }}
                    showsVerticalScrollIndicator={false}
                    data={images}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Image style={{ width: 60, height: 60, borderRadius: 10, marginHorizontal: 10 }} source={{ uri: item.url}} />}
                    horizontal={true}
                />
            </View>
            
            <TouchableOpacity onPress={()=> console.log(images)}

                style={{ width: 100, height: 100, backgroundColor: '#fff' }}>

            </TouchableOpacity>

        </View>
    )
}

export default editProduct