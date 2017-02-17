import api from '../api';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_SIGNUP = 'FETCH_SIGNUP';
// export const FETCH_SIGNUP_SUCCESS = 'FETCH_SIGNUP_SUCCESS';
// export const FETCH_SIGNUP_FAILURE = 'FETCH_SIGNUP_FAILURE';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = ({ data }) => ({
    products: data,
    type: FETCH_PRODUCTS_SUCCESS
});

// export const fetchSignUpRequest = () => ({
//     type: FETCH_SIGNUP_REQUEST
// });
//
export const fetchSignUp = ( token ) => ({
    token: token,
    type: FETCH_SIGNUP
});

export const listProducts = () => dispatch => {
    dispatch(fetchProductsRequest());

    return api.listProducts()
        .then(data => dispatch(fetchProductsSuccess(data)));
}

export const addToCart = (productId) => dispatch => {
    return api.addToCart(productId)
}

export const signUp = () => dispatch => {

    return api.signUp()
        .then( token  => dispatch(fetchSignUp( token )));
}

export const signUser = (user) => dispatch => {
    return api.passport(user)
}
