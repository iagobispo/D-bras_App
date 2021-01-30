import api from '../../../services/api.services';
import { addItem } from '../../ducks/user';
import asyncStorage from '@react-native-community/async-storage';

import {logado} from '../../ducks/auth';

export const login = (props) => {
    return async  dispatch => {
        try {

            const response = await api.post('/usuarios/login', props)
            //await dispatch(addItem(response.data.usuario))
            await asyncStorage.setItem('@RNAuth:token', response.data.usuario.token)
            await asyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data.usuario))
            await asyncStorage.setItem('@RNAuth:auth', 'authenticated')

            const auth = await asyncStorage.getItem('@RNAuth:auth')
            if(auth === 'authenticated') {
               await dispatch(logado())
            }
            const teste = await asyncStorage.getItem('@RNAuth:user')
            console.log(teste)

        } catch (err) {
            return ('erro')
        }
    }
}

export const register = (props) => {
    return async dispatch => {
        try{
            const response = await api.post('/usuarios/registrar', props)
            await dispatch(addItem(response.data.usuario))
            await asyncStorage.setItem('@RNAuth:token', response.data.usuario.token)
            if(response.data.usuario.token) {
                dispatch(logado())
            }
            const teste = await asyncStorage.getItem('@RNAuth:token')
            console.log(teste)
        }catch (err) {

        }
    }
}

//console.log(err.response.data.errors)



// export const login = (props)  => {
//     return dispatch => {
//         api.post('/usuarios/login', props) 
//             .then(res => dispatch(addItem(res.data.usuario)))
//             .catch((e) => console.log(e))
//     }
// }


// export async function login(data) {

//     try{
//     const response = await api.post(`/auth/authenticate`, data)

//     setUser(response.data.user);
//     setToken(response.data.token);
//     setphone(response.data.user.phone);

//     await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data.user));
//     await AsyncStorage.setItem('@RNAuth:Token', response.data.token);

//     }catch(err){
//        return ('Algo deu errado! tente novamente')
//        //err.response
//     }



//     //api.defaults.headers.authorization = `Bearer ${response.data.token}`;

// }

