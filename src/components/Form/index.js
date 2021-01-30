import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

import logoImg from '../../../src/assets/image/logo.png';

import styles from './styles';

function Form({ inputs, textSubmit, submit, show}) {
    return(
        <KeyboardAvoidingView style={styles.containerForm} behavior='padding'>
            <Image source={logoImg} style={styles.logo}/>
            {inputs.map((input, index) => (
               <TextInput key={index} {...input} style={styles.input} placeholderTextColor='#999'/>
            ))}

            <TouchableOpacity style={styles.buttonForm} onPress={submit}>
                <Text style={styles.buttonText}>{textSubmit}</Text>
            </TouchableOpacity>

            {show && <TouchableOpacity onPress={show} style={styles.containerButtonShow}>
                <Text style={styles.buttonTextShow}>Criar conta</Text>
            </TouchableOpacity> 
            }
           

        </KeyboardAvoidingView>
    );
}

export default Form;