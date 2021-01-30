import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addCategoria = createAction('ADD_Categoria');
export const addCategorias = createAction('ADD_Categorias');

export default createReducer(INITIAL_STATE, {
    [addCategoria.type]: (state, action) => [...state, action.payload ],
    [addCategorias.type]: (state, action) => [ ...action.payload ]
});