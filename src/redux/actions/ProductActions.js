import { ProductsActionTypes } from "../constants/ActionTypes";

export const setProduct = (products) => ({
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: products
})

export const selectedProduct = (product) => ({
    type: ProductsActionTypes.SELECTED_PRODUCT,
    payload: product
})
 
export const addProduct = (product) => ({
    type: ProductsActionTypes.ADD_PRODUCT,
    payload: product
})

export const updateProduct = (product) => ({
    type: ProductsActionTypes.UPDATE_SELECTED_PRODUCT,
    payload: product
})