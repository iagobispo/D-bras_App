
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Header from '../../components/header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

import {useSelector, useDispatch} from 'react-redux';
import {remuveFavorite} from '../../store/ducks/favoriteHeart'
import {addItem} from '../../store/ducks/cart'

function favorites() {
  const dispatch = useDispatch();

  const favoriteItens = useSelector(state => state.favoriteHeart);

  function limitsText(text) {
    if (text.length < 60) {
      return text
    }

    return `${text.substring(0, 60)}...`;
  }

  

  function FavoriteRender({ item }) {

    function removefavoriteItem(itemFavorite){
      dispatch(remuveFavorite(itemFavorite))
    }

    function addcartItem(itemFavorite){
      dispatch(addItem(itemFavorite))
    }

    return (
      <View style={styles.containerItem}>
        <Image style={styles.imageItem} source={{ uri: item.url[0]}} />

        <View style={styles.containerText}>

          <Text style={styles.titleItem} >
            {item.titulo}
          </Text>
          <Text style={styles.descriptionText}>
            {limitsText(item.descricao)}
          </Text>

          <Text style={styles.priceText}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</Text>

        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity onPress={() => addcartItem(item)}>
            <MaterialCommunityIcons name={'cart-plus'} style={styles.iconBtn} /> 
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> removefavoriteItem(item._id)}>
            <MaterialCommunityIcons name={'trash-can-outline'} style={styles.iconBtn} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Header title='Favoritos' arrowLeft={true} />
      <View style={{ paddingHorizontal: 10, backgroundColor: '#fff' }}>
        <Text style={styles.title}>
          Total de itens ({favoriteItens.length < 10 ? `0${favoriteItens.length}` : favoriteItens.length })
      </Text>

        <FlatList
          style={{}}
          showsVerticalScrollIndicator={false}
          data={favoriteItens}
          keyExtractor={(itens) => String(itens.id)}
          renderItem={({ item }) => <FavoriteRender item={item} />}
        />

      </View>
    </View>
  );
};


export default favorites;