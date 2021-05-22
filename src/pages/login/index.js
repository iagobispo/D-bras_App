import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Form from '../../components/Form';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/searches/fetchUser';
import Header from '../../components/header'

import styles from './styles';

const image = { uri: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/E91067/2d42eed6-65df-448a-a30c-15321d3d0403-bolsa-tropical-coqueiros-eudora-eudora.png' }

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
        if (response === 'erro') {
            return
        }
        // console.log(response)

        navigationToHomePage()
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1 }} source={image}>
                <Header title='Login' arrowLeft={true}/>

                <Form
                    textSubmit='Enviar'
                    submit={submit}
                    textLogin='Faça seu login com a sua conta D-BRAS '
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
            </ImageBackground>
        </View>
    )
}

export default Login;






// async function storage(chave, valor) {
//     await asyncStorage.setItem(chave, valor)
//     setTokenn(asyncStorage.getItem('@RNAuth:token'))
//     await asyncStorage.setItem('@RNAuth:token', usuar[0].token )
// }