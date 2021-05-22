import axios from 'axios';

export default axios.create({
    baseURL: 'https://dbras-backend.herokuapp.com/v1/api'
})
