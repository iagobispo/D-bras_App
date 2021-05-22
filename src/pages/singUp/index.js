import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import Form from '../../components/Form';

import styles from './styles';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';
import { register } from '../../store/searches/fetchUser';
import { useDispatch, useSelector } from 'react-redux';

const image = { uri: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/E91067/2d42eed6-65df-448a-a30c-15321d3d0403-bolsa-tropical-coqueiros-eudora-eudora.png' }


function sigeUp() {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');

    function navigationToHomePage() {
        navigation.navigate('Home');
    }

    function navigationTogoBackPage() {
        navigation.goBack()
    }

    function submit() {
        const data = {
            email,
            nome,
            password

        }
        dispatch(register(data))
        navigationToHomePage()
        setEmail('');
        setPassword('');
        setNome('');
    }

    return (
        <>
            <ImageBackground style={{ flex: 1, opacity: 20}} source={image}>
                <Header title='Criar conta' arrowLeft={true} goBack={navigationTogoBackPage} />
                <View style={styles.containerView}>
                    <Form
                        textSubmit='Criar uma conta'
                        submit={submit}

                        politic={{
                            a: 'Ao clicar em criar conta voçê concorda com nossos',
                            b: 'termos de uso',
                            c: ' e ',
                            d: 'politica de privacidade.'
                        }}


                        inputs={[
                            {
                                onChangeText: setNome,
                                placeholder: 'Nome do usuario',
                                value: nome
                            },
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



                    />

                </View>
            </ImageBackground>
        </>



    )
}

export default sigeUp;