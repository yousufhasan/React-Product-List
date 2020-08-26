import { combineReducers } from 'redux';
import { pageReducer } from './page';
import { metaReducer } from './meta';
import { sortReducer } from './sort'; 

export const productListReducer = combineReducers({
    page: pageReducer,
    meta: metaReducer,
    sort: sortReducer
});