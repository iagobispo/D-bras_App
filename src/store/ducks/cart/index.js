import{ createAction, createReducer } from '@reduxjs/toolkit';


const INITIAL_STATE = [];

export const addItem = createAction('ADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')
export const remuveQuantity = createAction('REMUVE_QUANTITY')
export const addQuantity = createAction('ADD_QUANTITY')
//export const calculoTotal = createAction('CALCULO_TOTAL')

export default createReducer(INITIAL_STATE, { 
    [addItem.type]: (state, action) => {

        let car = action.payload
        let carts = {...car, qty:1}

        const existItem = state.some(item => item._id === car._id)

        if(existItem){
            return state.map(item => {
                return item._id === car._id ? {...item, qty: item.qty + 1} : item
            })
        }

        // return state.map((item) => {
        //     item._id === action._id && item.qty++
        //     return item
        // }) 

        return ([...state, carts])
    },
    [remuveQuantity.type]: (state, action) => {

        let car = action.payload
        const existItem = state.some(item => item._id === car)

        if(existItem){
            if(existItem.qty == 1){
                return 
            }
            return state.map(item => {
               if(item.qty == 1) {
                   return item
               }
               return item._id === car ? {...item, qty: item.qty - 1} : item
            })
            
        }

    },
    [addQuantity.type]: (state, action) => {

        let car = action.payload
        const existItem = state.some(item => item._id === car)

        if(existItem){
            return state.map(item => {
                return item._id === car ? {...item, qty: item.qty + 1} : item
            })
        }

    },
    // [calculoTotal.type]: (state, action)=>{
        
    // },
    [removeItem.type]: (state, action) => state.filter((item) => item._id !== action.payload)
});














//    [addItem.type]: (state, action) => [...state, action.payload],
















// import{ createAction, createReducer } from '@reduxjs/toolkit';

// export class CartItem{
//     constructor(obj){
//         obj && Object.assign(this, obj, {quantity:1})
//     }
// }

// const INITIAL_STATE = {
//     itens:[]
// };

// export const addItem = createAction('ADD_ITEM')
// export const removeItem = createAction('REMOVE_ITEM')

// export default createReducer(INITIAL_STATE, {
//     [addItem]: (state, action) => ({
//         ...state,
//         itens:[...state.itens, new CartItem(action.payload)]
//     }),
//     [removeItem.type]: (state, action) => state.filter((item) => item._id !== action.payload)
// });

// export const cardQuantitySelector = (state)=> state.cart.itens.length;
// export const itensCartSelector = (state) => state.cart.itens;




// [addItem.type]: (state, action) => [...state, action.payload],
// [addItem.type]: (state, action) => [...state.map(item => ({...item, qty: 1})), action.payload],




