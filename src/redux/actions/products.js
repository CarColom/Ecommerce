import axios from 'axios';
import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_BY_ARRIVAL_SUCCESS,
    GET_PRODUCTS_BY_ARRIVAL_FAIL,
    GET_PRODUCTS_BY_SOLD_SUCCESS,
    GET_PRODUCTS_BY_SOLD_FAIL,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_FAIL,
    RELATED_PRODUCTS_SUCCESS,
    RELATED_PRODUCTS_FAIL,
    FILTER_PRODUCTS_SUCCESS,
    FILTER_PRODUCTS_FAIL,
    ADD_PRODUCT_REQUEST, 
    ADD_PRODUCT_SUCCESS, 
    ADD_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST, 
    UPDATE_PRODUCT_SUCCESS, 
    UPDATE_PRODUCT_FAILURE, 
    DELETE_PRODUCT_REQUEST, 
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE 
} from './types';

export const get_products = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try { 
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/get-products`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_PRODUCTS_FAIL
        });
    }
}

export const get_products_by_arrival = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/get-products?sortBy=date_created&order=desc&limit=3`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_BY_ARRIVAL_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_BY_ARRIVAL_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_PRODUCTS_BY_ARRIVAL_FAIL
        });
    }
}

export const get_products_by_sold = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/get-products?sortBy=sold&order=desc&limit=3`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_BY_SOLD_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCTS_BY_SOLD_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_BY_SOLD_FAIL
        });
    }
}

export const get_product = (productId) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/product/${productId}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCT_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PRODUCT_FAIL
        });
    }
}

export const get_related_products = (productId) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/related/${productId}`, config);

        if (res.status === 200 && !res.data.error) {
            dispatch({
                type: RELATED_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: RELATED_PRODUCTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: RELATED_PRODUCTS_FAIL
        });
    }
}


export const get_filtered_products = (category_id, price_range, sort_by, order) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        category_id,
        price_range,
        sort_by,
        order
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/product/by/search`, body, config);

        if (res.status === 200 && !res.data.error) {
            dispatch({
                type: FILTER_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: FILTER_PRODUCTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: FILTER_PRODUCTS_FAIL
        });
    }
}

export const get_search_products = (search, category_id) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        search,
        category_id
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/product/search`, body, config);

        if (res.status === 200) {
            dispatch({
                type: SEARCH_PRODUCTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: SEARCH_PRODUCTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: SEARCH_PRODUCTS_FAIL
        });
    }
}


// Agregar producto
export const addProduct = (productData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_PRODUCT_REQUEST });
        try {
            const response = await axios.post('/api/create-product', productData);
            dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.response.data });
        }
    };
};

// Actualizar producto
export const updateProduct = (productId, productData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
        try {
            const response = await axios.put(`/api/update-product/${productId}`, productData);
            dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.response.data });
        }
    };
};

// Borrar producto
export const deleteProduct = (productId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
        try {
            await axios.delete(`/api/delete-product/${productId}`);
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
        } catch (error) {
            dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.response.data });
        }
    };
};