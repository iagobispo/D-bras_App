import api from '../../../services/api.services';
import asyncStorage from '@react-native-community/async-storage';

export const registerLoja = async (props) => {

    try {
        const storagedToken = await asyncStorage.getItem('@RNAuth:token');
        api.defaults.headers.authorization = await `Bearer ${storagedToken}`;

        const response = await api.post('/lojas', props)
        await asyncStorage.setItem('@RNAuth:lojaId', response.data.loja._id)
        const teste = await asyncStorage.getItem('@RNAuth:lojaId')
        console.log(teste)

        return response.status

    } catch (err) {
        console.log(err.response.data.errors)
    }

}