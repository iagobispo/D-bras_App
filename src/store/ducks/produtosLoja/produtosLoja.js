import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addProdutoLoja = createAction('ADD_PRODUTO_LOJA');
export const addProdutosLoja = createAction('ADD_PRODUTOS_LOJA');

export default createReducer(INITIAL_STATE, {
    [addProdutoLoja.type]: (state, action) => {action.payload},
    [addProdutosLoja.type]: (state, action) => [...action.payload]
});