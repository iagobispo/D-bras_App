import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = { 
    isAuthenticated: false
}

export const logado = createAction('LOGADO');
export const logout = createAction('LOGOUT');

export default createReducer(INITIAL_STATE, {
    [logado.type]: (state, action) => ({ ...state, isAuthenticated: true}),
    [logout.type]: (state, action) => ({ ...state, isAuthenticated: false})
});