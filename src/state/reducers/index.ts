import {combineReducers} from "redux";
import { productListReducer } from "./productList";

export const rootReducer = combineReducers({
    productList: productListReducer
});