import React from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");
const height = width * 0.6;

function Slide({image}) {
    return (
        <>
            <ScrollView horizontal style={{width, height: 350}}>
            {
                image.map((item, index) => (
                    <Image
                        key={index}
                        style={{
                            width,
                            height: '90%',
                            resizeMode: 'contain',
                            borderRadius: 10,
                            borderRadius: 20,
                        }}
                        source={{ uri: item }} 
                    /> 
                ))
            }
            </ScrollView>
        </>
    )
}

export default Slide