import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SIGNUP,
    // FETCH_SIGNUP_SUCCESS
} from '../actions';

const products = ( state = { isFetching: false, products: [] }, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: action.products
            };
        default:
            return state
    }
};

const signup = ( state = { signup: [] }, action) => {
    switch (action.type) {
        case FETCH_SIGNUP:
            return {
                ...state,
                signup: action.token
            };
        default:
            return state
    }
};

export default combineReducers({ products, signup, routing });
