import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, ImageBackground, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch, useSelector } from 'react-redux';
import {removeItem} from '../../store/ducks/cart';
import {remuveQuantity} from '../../store/ducks/cart';
import {addQuantity} from '../../store/ducks/cart';

import Header from '../../components/header'
import ModalMessage from '../../components/Modal';

import styles from './styles';

const endereco = "Entregar em - AV. Conde de Monte Cristo, 1001,  08670-020"
function Cart() {
    const [modalMessageVisible, setModalMessageVisible] = useState(false)
    const modalizeRef = useRef(null)

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const car = useSelector((state) => state.cart)
    

    function navigationTogoBackPage() {
        navigation.goBack()
    }

    function limitsText(text) {
        if (text.length < 14) {
            return text
        }

        return `${text.substring(0, 14)}...`;
    }

    function onOpen() {
        modalizeRef.current?.open();
    }

    function remuveItemCart(item){
        dispatch(removeItem(item._id));
    }

    function remuveItem(item){
        dispatch(remuveQuantity(item._id));
    }
    function addItemQuantity(item){
        dispatch(addQuantity(item._id));
    }

    const totall = car.reduce( (acc, item) => acc + (item.preco * item.qty), 0)
    
    function ItemCard({ item, remuveItemCart}) {
        

        return (
            <View style={styles.containerProduto}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.image} source={{ uri: item.url[0] }} />

                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.textTitle}> {`${item.qty}x ${limitsText(item.titulo)}`}</Text>
                        <Text style={styles.textDescription}>{limitsText(item.descricao)}</Text>
                    </View>
                </View>

                <View style={styles.containerButtom}>
                    <TouchableOpacity onPress={()=>{remuveItem(item)}} style={styles.buttomMinus}>
                        <MaterialCommunityIcons  name="minus" style={styles.iconMinus} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{addItemQuantity(item)}} style={styles.buttomPlus}>
                        <MaterialCommunityIcons  name="plus" style={styles.iconPlus} />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'space-between', }}>
                    <TouchableOpacity onPress={()=>{remuveItemCart(item)}} style={{ alignItems: 'flex-end',  }}>
                        <MaterialCommunityIcons name="trash-can-outline" style={styles.iconLixo} />
                    </TouchableOpacity>

                    <Text>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</Text>
                </View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header title='Carrinho' arrowLeft={true} goBack={navigationTogoBackPage} />
            <Text style={styles.textTotal}>Total de itens({car.length < 10 ? `0${car.length}` : car.length})</Text> 

            { modalMessageVisible === true ? <ModalMessage 
            textButton='Acompanhar pedido'
            titulo='Tudo certo!'
            paragrafo1='Sua compra foi realizada com sucesso.'
            paragrafo2='Fique de olho nas notificações.'
            color='#41e6be'
            /> : false}

            <FlatList
                style={styles.flatList}
                showsVerticalScrollIndicator={false}
                data={car}
                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => <ItemCard item={item} remuveItemCart={remuveItemCart} remuveItem={remuveItem} addItemQuantity={addItemQuantity}/>}

            />


            <View style={styles.containarFooter}>
                <View>
                    <Text style={styles.textTotalValor}>Total:</Text>
                    <Text style={styles.textValor}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totall)}</Text>

                </View>
                <View>
                    <TouchableOpacity onPress={onOpen} style={styles.buttonCompra}>
                        <Text style={styles.textButton}>Concluir compra</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modalize
                ref={modalizeRef}
            //snapPoint={800}
            //modalHeight={200}
            >
                <View style={styles.containerModal}>
                    <Text style={styles.textTitleModal}>Informações de envio.</Text>
                    <TouchableOpacity style={styles.containerEndereco}>
                        <MaterialCommunityIcons name="map-marker-outline" style={styles.iconPoint} />
                        <Text style={styles.textEndereco}>{endereco}</Text>
                        <MaterialCommunityIcons name="chevron-right" style={styles.iconArrow} />
                    </TouchableOpacity>
                    <Text style={styles.textSubTitle}>Informações de pagamento.</Text>

                    <View style={styles.containerButtomModal}>
                        <TouchableOpacity style={styles.buttomSalvo}>
                            <Text style={styles.textButtomSalvo}>Cartão salvo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttomNovo}>
                            <Text style={styles.textButtomNovo}>Novo cartão</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerCard}>
                        <View style={styles.borderPicker}>
                            <View style={styles.picker}>
                            </View>
                        </View>

                        <View style={styles.card}>
                        </View>

                        <View style={styles.containerTextCard}>
                            <Text style={styles.cardTitle}>Masterclass *9212</Text>
                            <Text style={styles.cardInfo}>Iago B dos Santos - 12/2030</Text>
                        </View>
                    </View>



                    <Text style={styles.titlesPedido}>Seu pedido.</Text>

                    <View style={styles.containerPedidos}>
                        <View style={styles.containerTextPedidos}>
                            <Text style={styles.textePedidoInf}>Subtotal</Text>
                            <Text style={styles.textePedidoInf}>Taxas</Text>
                            <Text style={styles.textePedidoInf}>Descontos</Text>
                        </View>

                        <View style={{ justifyContent: 'space-around', height: 72 }}>

                            <View style={ styles.lineInf}></View>
                            <View style={styles.lineInf}></View>
                            <View style={styles.lineInf}></View>

                        </View>

                        <View style={styles.containerTextPedidosValor}>
                            <Text style={styles.textePedidoInf}>R$291,21</Text>
                            <Text style={styles.textePedidoInf}>R$ 2,90</Text>
                            <Text style={styles.textePedidoInf}>R$ 0</Text>
                        </View>
                    </View>

                    <Text style={styles.textTotalPedido}>Total: R$ 294,11</Text>

                    <TouchableOpacity style={styles.buttonPagar} onPress={()=> setModalMessageVisible(true)} >
                        <Text style={styles.textButtonPagar}>Pagar R$ 294,11</Text>
                    </TouchableOpacity>

                </View>

            </Modalize>

        </View>
    )
}

export default Cart;
