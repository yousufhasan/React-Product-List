import { Reducer } from "redux";
import { LoadingStatus } from "../../enums/loadingStatus";
import { ProductListResultPage } from "../../";
import {
  PRODUCT_LIST_RESULT_LOADING,
  PRODUCT_LIST_RESULT_SUCCESS,
  PRODUCT_LIST_RESULT_FAILED,
  ProductListAction,
  ProductListResultSuccessAction,
  ProductListResultFailedAction,
} from "../../actions";

const productPageInitialState: ProductListResultPage = {
  products: [],
  apiStatus: LoadingStatus.Initial,
};

export const pageReducer: Reducer<ProductListResultPage, ProductListAction> = (
  state = productPageInitialState,
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_RESULT_LOADING:
      const loadingState: ProductListResultPage = {
        products: [],
        apiStatus: LoadingStatus.Loading,
      };
      return loadingState;
    case PRODUCT_LIST_RESULT_SUCCESS:
      const successState: ProductListResultPage = {
        products: (action as ProductListResultSuccessAction).payload,
        apiStatus: LoadingStatus.Loaded,
      };
      return successState;
    case PRODUCT_LIST_RESULT_FAILED:
      const failedState: ProductListResultPage = {
        products: [],
        apiStatus: LoadingStatus.Error,
        error: (action as ProductListResultFailedAction).payload,
      };
      return failedState;
    default:
      return state;
  }
};
