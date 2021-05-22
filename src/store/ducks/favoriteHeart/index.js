import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addFavorite = createAction('ADD_FAVORITE');
export const remuveFavorite = createAction('REMUVE_FAVORITE');

export default createReducer(INITIAL_STATE, {
[addFavorite.type]: (state, action) => {

    const existItem = state.some(item => item._id === action.payload._id)

    if(existItem){
        return
    }

   return([...state, action.payload]) 

}
,
[remuveFavorite.type]: (state, action) => state.filter((item) => item._id !== action.payload)
})