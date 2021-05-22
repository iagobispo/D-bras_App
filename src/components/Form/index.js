import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

import logoImg from '../../../src/assets/image/logo.png';


import styles from './styles';

function Form({ inputs, textSubmit, submit, show, politic, textLogin }) {

    return (
        <KeyboardAvoidingView style={styles.containerForm} behavior='padding'>

            <Image source={logoImg} opacity={0.9} style={styles.logo} />

            {textLogin && <Text style={styles.textLogin}>{textLogin}</Text>}


            {inputs.map((input, index) => (
                <TextInput key={index} {...input} style={styles.input} placeholderTextColor='#c8c8c8'/>
            ))}

            {politic &&
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textPolitic }>{politic.a}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Text style={styles.textPoliticSerif}>{politic.b}</Text>
                        </TouchableOpacity>
                        <Text style={styles.textPolitic2}>{politic.c}</Text>
                        <TouchableOpacity>
                            <Text style={styles.textPoliticSerif}>{politic.d}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            }

            <TouchableOpacity style={styles.buttonForm} onPress={submit}>
                <Text style={styles.buttonText}>{textSubmit}</Text>
            </TouchableOpacity>

            {show &&
                <>
                    <Text style={styles.textLogin2}>ou</Text>
                    <TouchableOpacity onPress={show} style={styles.containerButtonShow}>
                        <Text style={styles.buttonTextShow}>Criar conta</Text>
                    </TouchableOpacity>
                </>
            }


        </KeyboardAvoidingView>
    );
}

export default Form;




