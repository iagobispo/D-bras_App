
import React, { useEffect, useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';

import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import ImagePicker from 'react-native-image-crop-picker';

import { allCategories } from '../../../store/searches/fetchCategorias';
import { criarProduto, addPhotos } from '../../../store/searches/fetchProdutos';


import { useSelector, useDispatch } from 'react-redux'

import Header from '../../../components/header';
import styles from './styles';

import imageLogo from '../../../assets/image/logo.png';

function AddProduct() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagens, setImagens] = useState([])


    const categorias = useSelector((state) => state.categorias);

    const dispatch = useDispatch();// atribuindo a funçao useDispatch em uma variavel

    const navigation = useNavigation();

    const [showCategoria, setShowCategoria] = useState(true);// variavel para mostrar e esconder opçoes de categorias
    const [showContainerAddProduct, setShowContainerAddProduct] = useState(false);
    const [showContainerAddPhotos, setshowContainerAddPhotos ] = useState(false);


    const [id, setId] = useState();

    const [titulo, setTitulo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [sku, setSku] = useState('');
    const [categoria, setCategoria] = useState('');

    const [idProduto, setIdProduto] = useState(null);
    const [img, setImg] = useState(false)

    function image() {
        ImagePicker.openPicker({
          width: 300,
          height: 300,
          multiple: true,
          cropping: true
        }).then(images => {
          console.log(...images);
          setImg(images)
        });
      }


    function navigateToHomePage() { //funçao para voltar a pagina 
        navigation.navigate('Home')
    }

    function hideCategoria(valor) { // funçao para esconder as opçoes de categorias e setar os valores do id e do nome da categoria selecionada
        setShowCategoria(false)

        setId(Number(valor._id));
        setCategoria(valor._id);
        setShowContainerAddProduct(true)
    }

    async function productRegister() {

        // if (nomeProduto == '') {
        //     return alert('Informe o nome do produto')
        // } else if (quantidade == '') {
        //     return alert('Informe a quantidade disponível')
        // } else if (preco == '') {
        //     return alert('Informe o preço do produto')
        // } else if (url == '') {
        //     return alert('Adicione uma imagem do seu produto com uma url')
        // } else if (descricao == '') {
        //     return alert('Adicione uma descrição para o seu produto')
        // }


        const data = {
            titulo,
            //quantidade,
            preco,
            descricao,
            categoria,
            sku

        }
        const resposta = await dispatch(criarProduto(data))
        await setIdProduto(resposta.data.produto._id)
    

        if (resposta.status === 200) {
            setshowContainerAddPhotos(true)
            setShowContainerAddProduct(false)

        }


        // setDescricao('');
        // setTitulo('');
        // setSku('');
        // setPreco('');
        // setQuantidade('');

    }



    useEffect(() => {

        dispatch(allCategories());

    }, [dispatch]);



    async function addPhotoProduct() {
        
        const formData = new FormData();
        formData.append('files', {
            uri: img[0].path,//Your Image File Path
            type: img[0].mime,
            name: img[0].modificationDate,
        });

        const props = await {formData, idProduto}
                    
        //const resposta = await dispatch(addPhotos(props))
        const resposta = await addPhotos(props)
        //console.log(props.formData)

    }




    return (
        <>
            <Header title='Criar produto' arrowLeft />

            <View style={{ flex: 1, }} >

                {// opçoes para escolher a categoria
                    showCategoria &&
                    <View style={styles.container}>
                        <Text style={{marginTop: 36, fontSize: 16, fontWeight: 'bold', color:'#424242'}}>Escolha a categoria do seu produto</Text>

                        <FlatList
                            style={{backgroundColor: '#c4c4c490-', width: '100%', borderRadius: 5, marginBottom: 50, paddingHorizontal: 10, paddingTop: 50, marginTop: 36}}
                            showsVerticalScrollIndicator={false}
                            data={categorias}
                            keyExtractor={(item) => String(item._id)}
                            renderItem={({ item }) => <TouchableOpacity
                                onPress={function test() { hideCategoria(item) }}>
                                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', height: 40, borderBottomWidth: 1}}>
                                    <Text style={{ fontSize: 16}}>{item.nome}</Text>
                                </View>
                            </TouchableOpacity>}
                        />
                    </View>
                }

                {showContainerAddProduct &&
                    <>

                        <KeyboardAvoidingView style={{ alignItems: 'center', flex: 1, justifyContent: 'space-evenly', backgroundColor: '#fff' }}>

                            <Image
                            source={imageLogo}
                            style={{width: 80, height: 80}}
                            />
                            
                            <Text style={{color: '#424242'}}> 
                                Preencha os campos com as {'\n'}
                                informações do seu produto.
                            </Text>

                            <View style = {{width: '90%'}}>
                                <TextInput
                                    style={{ height: 50, backgroundColor: '#c2c2c299', borderRadius: 5, marginTop: '10%', paddingLeft: 15 }}
                                    placeholder='Nome...'
                                    value={titulo}
                                    onChangeText={(test) => setTitulo(test)}
                                />

                                <TextInput
                                    style={{  height: 40, backgroundColor: '#c2c2c299', borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='preço...'
                                    keyboardType='numeric'
                                    value={preco}
                                    onChangeText={(test) => setPreco(Number((test).replace(',', '.')))}
                                />

                                <TextInput
                                    style={{ height: 40, backgroundColor: '#c2c2c299', borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='Quantidade...'
                                    keyboardType='numeric'
                                    value={quantidade}
                                    onChangeText={(test) => setQuantidade(parseInt(test))}
                                />

                                <TextInput
                                    style={{ height: 40, backgroundColor: '#c2c2c299', borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='Sku'
                                    value={sku}
                                    onChangeText={(test) => setSku(test)}
                                />

                                <TextInput
                                    style={{ backgroundColor: '#c2c2c299', minHeight: 40, borderRadius: 5, marginTop: '3%', paddingLeft: 15 }}
                                    placeholder='Descrição...'
                                    numberOfLines={4}
                                    multiline={true}
                                    value={descricao}
                                    onChangeText={(test) => setDescricao((test).toString())}
                                />

                                {selectedImage !== null &&

                                <View style={{ flexDirection: 'row' }}>
                                    < FlatList
                                        horizontal
                                        showsVerticalScrollIndicator={false}
                                        showsHorizontalScrollIndicator={false}
                                        data={imagens}
                                        keyExtractor={(item) => String(item.id)}
                                        renderItem={({ item }) => <View style={{ width: 100, height: 100, margin: 10 }}><Image style={{ width: 100, height: 100, borderRadius: 50 }} source={{ uri: item.url }} /></View>}
                                    />

                                </View>

                                }

                                <TouchableOpacity style={{ height: 50,marginTop: '6%', alignItems: 'flex-end', justifyContent: 'center', borderRadius: 10, backgroundColor: '#424242', width: '100%', alignItems: 'center' }} onPress={productRegister}>
                                <Text style={{ color: '#fff', fontSize: 16 }}>Proximo</Text>
                                </TouchableOpacity>

                            </View>

                        </KeyboardAvoidingView>

                    </>
                }


                { showContainerAddPhotos && 
                    <>
                    <View style={{  flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
              
                      <Text style={{ fontSize: 15 }}>Adicione fotos ao seu produto</Text>
              
                      {img && 
              
                        <View style={{width: '100%'}}>
                          <FlatList
                              style={{paddingHorizontal: 10, width: '100%', alignContent: 'center'}}
                              showsVerticalScrollIndicator={false}
                              data={img}
                              keyExtractor={(item) => String(item.path)}
                              renderItem={({ item }) => <Image style={{width: 60, height: 60, borderRadius: 10, marginHorizontal: 10}} source={{uri: item.path}}/> }
                              horizontal={true}
                          />
                        </View>
                      
                      
              
                      }
              
                      <TouchableOpacity onPress={() => image()}
                        style={{ backgroundColor: 'black', width: 100, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                          <Text style={{color:'#fff'}}>+</Text>
              
                      </TouchableOpacity>
              
                      <TouchableOpacity onPress={addPhotoProduct}
                        style={{ backgroundColor: 'black', width: 100, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 40 }}>
                          <Text style={{color:'#fff'}}>enviar</Text>
              
                      </TouchableOpacity>
              
                    </View>
                  </>
                }



            </View>
        </>
    )
}



export default AddProduct;