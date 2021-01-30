import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Form from '../../components/Form';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/searches/fetchUser';

import styles from './styles';

function Login() {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    //const usuario = useSelector((state) => state.user)

    function navigationToSingUpPage() {
        navigation.navigate('SingUp');
    }

    function navigationToHomePage() {
        navigation.navigate('Home');
    }
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit() {
        const data = {
            email,
            password
        }

        const response = await dispatch(login(data))
        if(response === 'erro'){
            return
        }
       // console.log(response)

        navigationToHomePage()
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <Form
                textSubmit='Enviar'
                submit={submit}
                inputs={[
                    {
                        onChangeText: setEmail,
                        placeholder: 'E-mail...',
                        value: email
                    },
                    {
                        onChangeText: setPassword,
                        placeholder: 'Senha...',
                        value: password,
                        secureTextEntry: true
                    }
                ]}
                show={navigationToSingUpPage}
            />
        </View>
    )
}

export default Login;




// async function storage(chave, valor) {
//     await asyncStorage.setItem(chave, valor)
//     setTokenn(asyncStorage.getItem('@RNAuth:token'))
//     await asyncStorage.setItem('@RNAuth:token', usuar[0].token )
// }