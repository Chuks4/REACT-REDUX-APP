import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducers";

export const reducers = combineReducers({
  allProducts: ProductReducer,
});
