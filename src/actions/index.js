import api from '../api';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = ({ data }) => ({
    products: data,
    type: FETCH_PRODUCTS_SUCCESS
});

export const listProducts = () => dispatch => {
    dispatch(fetchProductsRequest());

    return api.listProducts()
        .then(data => dispatch(fetchProductsSuccess(data)));
}
