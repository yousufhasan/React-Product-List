import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  PRODUCT_LIST_RESULT_LOADING,
  PRODUCT_LIST_RESULT_SUCCESS,
  PRODUCT_LIST_META,
  PRODUCT_LIST_RESULT_FAILED,
} from "./types";
import { Product, MetaData } from "../../model";
import { AppState } from "../";
import { makeGetAPICall } from "../../api";

export interface ProductListResultLoadingAction extends Action {
  type: typeof PRODUCT_LIST_RESULT_LOADING;
}

export interface ProductListResultSuccessAction extends Action {
  type: typeof PRODUCT_LIST_RESULT_SUCCESS;
  payload: Product[];
}

export interface ProductListMetaAction extends Action {
  type: typeof PRODUCT_LIST_META;
  payload: MetaData;
}

export interface ProductListResultFailedAction extends Action {
  type: typeof PRODUCT_LIST_RESULT_FAILED;
  payload: string;
}

export type ProductListAction =
  | ProductListResultLoadingAction
  | ProductListResultSuccessAction
  | ProductListMetaAction
  | ProductListResultFailedAction;

type GetProductListActionCreator = ActionCreator<
  ThunkAction<void, AppState, null, ProductListAction>
>;

export const setLoading = (): ProductListResultLoadingAction => ({
  type: PRODUCT_LIST_RESULT_LOADING,
});

export const setError = (message: string): ProductListResultFailedAction => ({
  type: PRODUCT_LIST_RESULT_FAILED,
  payload: message,
});

export const getProductList: GetProductListActionCreator = () => async (
  dispatch: Dispatch<ProductListAction>
) => {
  dispatch(setLoading());
  try {
    const response = await makeGetAPICall("/challenge-3/response.json");
    const successAction: ProductListResultSuccessAction = {
      type: PRODUCT_LIST_RESULT_SUCCESS,
      payload: response.data.results,
    };
    dispatch(successAction);
    const metaAction: ProductListMetaAction = {
      type: PRODUCT_LIST_META,
      payload: response.data.metadata,
    };
    dispatch(metaAction);
  } catch (e) {
    dispatch(setError(e.toString()));
  }
};
