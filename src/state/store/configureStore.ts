import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";
import { AppState } from "../index";

export function configureStore(initialState = {}): Store<AppState> {
    return createStore(rootReducer, initialState, applyMiddleware(thunk))
}