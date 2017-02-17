import axios from 'axios';


import { apiPrefix } from '../../backend/etc/config.json';

export default {
    listProducts() {
        return axios.get(`${apiPrefix}/`);
    },

    signUp() {
        return axios.get(`${apiPrefix}/user/signup`);
    },

    signUser(data) {
        return axios.post(`${apiPrefix}/user/signup`, data);
    },

    addToCart(productId) {
        return axios.get(`${apiPrefix}/add-to-cart/${productId}`);
    }
}
