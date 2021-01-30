import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import Form from '../../components/Form';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import logo from '../../../assets/icon.png';

import { useDispatch, useSelector } from 'react-redux';
import { registerLoja } from '../../store/searches/fetchLoja';
import asyncStorage from '@react-native-community/async-storage';

import styles from './styles';

function Login() {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    

   // const usuario = useSelector((state) => state.user);

    function navigationToSingUpPage() {
        navigation.navigate('SingUp');
    }

    function navigationToHomePage() {
        navigation.navigate('Home');
    }

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');

    const [telefone, setTelefone] = useState([]);
    const [celular, setCelular] = useState([]);

    const [local, setLocal] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [CEP, setCep] = useState('');

    const [cont, setCont] = useState(0);





    // async function submit() {

    //     const data = {
    //         email,
    //         password
    //     }

    //     const response = await dispatch(login(data))
    //     if (response === 'erro') {
    //         return
    //     }
    //     // console.log(response)

    //     navigationToHomePage()
    //     setEmail('');
    //     setPassword('');
    // }

   async  function submit() {
    const usuario =  JSON.parse(await asyncStorage.getItem('@RNAuth:user')) 

        const telefones = [
            telefone,
            celular
        ]
        const endereco = {
            local,
            numero,
            bairro,
            cidade,
            CEP
        }
        const usuario_ID = usuario._id
        const permissao = [...usuario.role, 'admin']

        const valor = {
            nome,
            cnpj,
            email,
            telefones,
            endereco,
            usuario_ID,
            permissao
        }
     const teste  = await registerLoja(valor)
     if(teste === 200){
         alert('loja criada com sucesso!')
         navigationToHomePage()
     }
      
    }

    return (
        <>
            <Header title='Cadastrar Loja' />
            <View style={styles.container}>


                {cont === 0 &&
                    <View style={{ flex: 1, justifyContent: 'space-between' }}>

                        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', marginTop: '5%' }}>
                            <Image source={logo} style={{ width: 70, height: 70 }} />
                        </View>

                        <View style={{}}>
                            <Text>Nome *</Text>
                            <TextInput
                                onChangeText={setNome}
                                value={nome}
                                placeholder='informe o nome da loja'
                                style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                            />
                            <Text>CNPJ *</Text>
                            <TextInput
                                onChangeText={setCnpj}
                                value={cnpj}
                                placeholder='informe o CNPJ da loja'
                                style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                            />
                            <Text>E-MAIL *</Text>
                            <TextInput
                                onChangeText={setEmail}
                                value={email}
                                placeholder='informe o e-mail da loja'
                                style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                            />
                            <Text>Telefone *</Text>
                            <TextInput
                                onChangeText={setTelefone}
                                value={telefone}
                                placeholder='informe o telefone da loja'
                                style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                            />
                            <Text>Celular *</Text>
                            <TextInput
                                onChangeText={setCelular}
                                value={celular}
                                placeholder='Informe o celular da loja'
                                style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                            />
                        </View>

                        <TouchableOpacity onPress={() => setCont(1)}
                            style={{
                                alignItems: 'flex-end',
                                paddingHorizontal: 20,
                                paddingBottom: 20
                            }}>
                            <Text style={{ fontSize: 20, color: 'black' }}>
                                Proximo
                            </Text>
                        </TouchableOpacity>
                    </View>}

                {cont === 1 && <View style={{ flex: 1, justifyContent: 'space-between' }}>

                    <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', marginTop: '5%' }}>
                        <Image source={logo} style={{ width: 60, height: 60 }} />
                    </View>

                    <View>
                        <Text>CEP *</Text>
                        <TextInput
                            onChangeText={setCep}
                            value={CEP}
                            placeholder='Informe o cep da loja'
                            style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                        />
                        <Text>RUA *</Text>
                        <TextInput
                            onChangeText={setLocal}
                            value={local}
                            placeholder='Informe o nome da Rua da sua loja'
                            style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                        />
                        <Text>CIDADE *</Text>
                        <TextInput
                            onChangeText={setCidade}
                            value={cidade}
                            placeholder='Informe a Cidade da loja'
                            style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                        />
                        <Text>BAIRRO *</Text>
                        <TextInput
                            onChangeText={setBairro}
                            value={bairro}
                            placeholder='Informe o bairro da loja'
                            style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                        />
                        <Text>NÚMERO *</Text>
                        <TextInput
                            onChangeText={setNumero}
                            value={numero}
                            placeholder='Informe o número da loja'
                            style={{ height: 40, marginBottom: 15, borderColor: 'black', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginTop: 3 }}
                        />

                    </View>

                    <TouchableOpacity onPress={submit}
                    style={{
                        alignItems: 'flex-start',
                        paddingHorizontal: 20,
                        backgroundColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        width: '100%',
                        height: 40
                    }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>
                        Enviar
                            </Text>
                </TouchableOpacity>


                    <TouchableOpacity onPress={() => setCont(0)}
                        style={{
                            alignItems: 'flex-start',
                            paddingHorizontal: 20,
                            paddingBottom: 20
                        }}>
                        <Text style={{ fontSize: 20, color: 'black' }}>
                            Voltar
                            </Text>
                    </TouchableOpacity>

                </View>

                }

            
                {/* <TouchableOpacity onPress={() => { alert(nome) }} style={{ width: 100, height: 100, backgroundColor: 'blue' }}>

                </TouchableOpacity> */}
            </View>

        </>
    )
}

export default Login;

