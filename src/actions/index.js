import * as Types from './../constants/ActionType';
import callApi from './../api/apiCaller';
import products from '../reducers/product';
//import products from '../reducers/product';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('product','GET',null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    };
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT, 
        products
    }
}
export const actDeleteRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'DELETE',null ).then(res => {
        
            dispatch(actDelete(res.data))
        });
    };
}
export const actDelete = (id) => {
    return {
        type: Types.DELETE,id
    }
}
export const actAddProductRequest = (products) => {
    return (dispatch) => {
        return callApi('product', 'POST',products ).then(res => {
        
            dispatch(actAddProduct(res.data))
        });
    };
}
export const actAddProduct = (products) => {
    return {
        type: Types.ADD_PRODUCT,products
    }
}
export const actEditProductRequest = (id) => {
    return dispatch  => {
        return callApi(`product/${id}`, 'GET',null ).then(res => {
            dispatch(actEditProduct(res.data))
        });
    };
}
export const actEditProduct = (products) => {
    return {
        type: Types.EDIT,products
    }
}
export const updateProductRequest=(products)=>{
    return dispatch=>{
        return callApi(`product/${products.id}`,'PUT',products).then(res=>{
            dispatch(updateProduct(products(res.data)))
        });
    }
}
export const updateProduct=(products)=>{
    return{
        type:Types.UPDATE,
        products
    }
}