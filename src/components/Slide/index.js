

import React, { useState, useRef } from 'react';
import { View, Image, ScrollView, Dimensions, Text } from 'react-native';
import Carrossel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get("window");
const height = width * 0.8;

function Slide({ imagens, index }) {
    return (
        <>
            <Image
                style={{
                    height,
                    resizeMode: 'contain',
                    borderRadius: 5
                }}
                source={{ uri: imagens }}
            />


        </>
    )
}

function CarrosselImg({ itemUrl }) {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View style={{ alignItems: 'center' }}>
            <Carrossel
                data={itemUrl.url}
                sliderWidth={335}
                itemWidth={335}
                renderItem={({ item }) => <Slide imagens={item} />}
                onSnapToItem={index => setActiveSlide(index)}
            />

            <View style={{marginTop: -20}}>
                <Pagination

                    dotsLength={itemUrl.url.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 10,
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: "#32323290"
                    }}
                    inactiveDotStyle={{
                        backgroundColor: "pink",width: 6, height: 6, borderColor: '#323232', borderWidth: 2
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>

        </View>
    )

}

export default CarrosselImg