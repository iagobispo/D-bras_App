import React from 'react';
import { View, Modal, Text, TouchableOpacity, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


function ModalMessage({ titulo, paragrafo1, paragrafo2, textButton, icone, color, colorTextButton, visible,  }) {

    const styles = EStyleSheet.create({
        textTitle: {
            fontSize: '$H3',
            fontWeight: 'bold',
            color: '$dark',
            marginTop: '4.5rem',
        },
        textParagrafo1:{
            fontSize: '$p',
            textAlign: 'center',
            color: '$silver',
            marginTop: '0.500rem',
        },
        textParagrafo2:{
            fontSize: '$p',
            textAlign: 'center',
            color: '$silver',
        },

        btn:{
            width: '18.75rem', 
            height: '3.125rem', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: '0.313rem',
            backgroundColor: color,
            marginTop: '0.900rem',
        },
        textBtn:{
            fontSize: '$pmedio',
            color: '$dark'
        }
    })


    return (
        <Modal
            transparent={false}
            visible={visible}
            style={{}}

        >
            <View style={{ width: '100%', position: 'absolute', top: '35%', alignItems: 'center' }}>

                <View style={{ width: 338, height: 225, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: color }}>
                    <View style={{ width: 125, height: 125, backgroundColor: color, borderRadius: 60, position: 'absolute', top: -62, left: 106.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{marginBottom: 20}} source={require('../../assets/image3D/Saly-26.png')}/>
                    </View>
                    <Text style={styles.textTitle}>{titulo}</Text>
                    <Text style={styles.textParagrafo1}>{paragrafo1}</Text>
                    <Text style={styles.textParagrafo2}>{paragrafo2}</Text>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.textBtn}>{textButton}</Text>
                    </TouchableOpacity>


                </View>

            </View>
        </Modal>
    )


    
}
 



export default ModalMessage;