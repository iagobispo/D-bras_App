import api from '../../../services/api.services';

import {addCategorias} from '../../ducks/categorias';

export const allCategories = () => {
    return dispatch => {
        api.get('/categorias/disponiveis') 
            .then(res => dispatch(addCategorias(res.data.categorias)))
            .catch(console.log('erro'))
    }
}





