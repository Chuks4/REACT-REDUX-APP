import { ProductsActionTypes } from "../constants/ActionTypes";

const initialState = {
  products: []
};
export const ProductReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ProductsActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case ProductsActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        products: payload 
      };

      case ProductsActionTypes.ADD_PRODUCT:
        return {
          ...state,
          products: payload
        }

    case ProductsActionTypes.UPDATE_SELECTED_PRODUCT:
      return  {
        ...state,
        products: payload
      }
    default:
        return state
  }
};
