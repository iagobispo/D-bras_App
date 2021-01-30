import React, {useState} from 'react';
import { View } from 'react-native';
import Form from '../../components/Form';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {register} from '../../store/searches/fetchUser';
import { useDispatch, useSelector } from 'react-redux';


function sigeUp(){
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');

    function navigationToHomePage() {
        navigation.navigate('Home');
    }

    function submit(){
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
    
    return(
        <View style={styles.containerView}>
            <Form
                textSubmit='Cadastrar'
                submit={submit}
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


        
    )
}

export default sigeUp;