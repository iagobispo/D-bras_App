import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addProduto = createAction('ADD_PRODUTO');
export const addProdutos = createAction('ADD_PRODUTOS');

export default createReducer(INITIAL_STATE, {
    [addProduto.type]: (state, action) => [...state, action.payload ],
    [addProdutos.type]: (state, action) => [ ...action.payload ]
});