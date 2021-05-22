import {configureStore} from '@reduxjs/toolkit'; // kit de ferramentas do redux

import rootProdutos from './ducks/produtosLista/produtos';
import rootProdutosLoja from './ducks/produtosLoja/produtosLoja';
import rootCategorias from './ducks/categorias';
import rootCart from './ducks/cart';
import rootUsuario from './ducks/user';
import rootAuth from './ducks/auth';
import rootFavorite from './ducks/favoriteHeart'


export default configureStore({
    reducer: {
        produtos: rootProdutos,
        produtosLoja: rootProdutosLoja,
        categorias: rootCategorias,
        cart: rootCart,
        user: rootUsuario,
        auth: rootAuth,
        favoriteHeart: rootFavorite,
    }
})

 