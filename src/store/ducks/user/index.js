import{ createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addItem = createAction('ADD_USER')
//export const removeItem = createAction('ADD_ITEMS')

export default createReducer(INITIAL_STATE, {
    [addItem.type]: (state, action) => [action.payload],
   // [removeItem.type]: (state, action) => state.filter((item) => item.id ==! action.payload)
});

