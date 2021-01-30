import api from '../../../services/api.services';

import { addProdutos } from '../../ducks/produtosLista/produtos';
import { addProdutosLoja } from '../../ducks/produtosLoja/produtosLoja'
import asyncStorage from '@react-native-community/async-storage';

export const allProdutos = () => { //buscar todos os produtos da plataforma
    return dispatch => {
        api.get('/produtos')
            .then(res => dispatch(addProdutos(res.data.produtos.docs)))
            //.then(res => console.log(res.data.produtos))
            .catch(console.log(''))
    }
}

 

export const produtosUsuario = (props) => {   //buscar todos os produtos com o id da loja
    return async  dispatch => {
        try {

            const response = await api.get(`/produtos/todos/idloja?loja=${props}`)
            const {produtos} = await response.data
            const {docs} = await response.data.produtos
             dispatch(await addProdutosLoja([produtos,docs]))
            //console.log(response.data.produtos)
           console.log(docs)

        } catch (err) {
            return ('erro')
        }
    }
}


export const criarProduto = (props) => {   //buscar todos os produtos com o id da loja
    return async  dispatch => {
        try {
            const storagedToken = await asyncStorage.getItem('@RNAuth:token');
            api.defaults.headers.authorization = await `Bearer ${storagedToken}`;    

            const id = await asyncStorage.getItem('@RNAuth:lojaId')

            const response = await api.post(`/produtos/?loja=${id}`, props)

            return(response)

        } catch (err) {
            console.log(err.response.data.errors)
        }
    }
}



