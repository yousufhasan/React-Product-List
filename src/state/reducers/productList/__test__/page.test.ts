import {
    ProductListResultLoadingAction,
    ProductListResultSuccessAction,
    ProductListResultFailedAction,
    PRODUCT_LIST_RESULT_FAILED,
    PRODUCT_LIST_RESULT_LOADING,
    PRODUCT_LIST_RESULT_SUCCESS,
  } from "../../../actions";
  import { pageReducer } from "../page";
  import { LoadingStatus } from "../../../enums";
  import { successMockState } from "../../../../test";
  
  describe("pageReducer", () => {
    const initialState = {
      apiStatus: LoadingStatus.Initial,
      products: [],
    };
  
    it("handles action of type PRODUCT_LIST_RESULT_LOADING", () => {
      const action: ProductListResultLoadingAction = {
        type: PRODUCT_LIST_RESULT_LOADING,
      };
      const state = pageReducer(initialState, action);
  
      expect(state).toEqual({
        apiStatus: LoadingStatus.Loading,
        products: [],
      });
    });
  
    it("handles action of type PRODUCT_LIST_RESULT_SUCCESS", () => {
      const action: ProductListResultSuccessAction = {
        type: PRODUCT_LIST_RESULT_SUCCESS,
        payload: successMockState.productList.page.products,
      };
      const state = pageReducer(initialState, action);
  
      expect(state).toEqual({
        apiStatus: LoadingStatus.Loaded,
        products: successMockState.productList.page.products,
      });
    });
  
    it("handles action of type PRODUCT_LIST_RESULT_FAILED", () => {
      const action: ProductListResultFailedAction = {
        type: PRODUCT_LIST_RESULT_FAILED,
        payload: "failed",
      };
      const state = pageReducer(initialState, action);
  
      expect(state).toEqual({
        apiStatus: LoadingStatus.Error,
        products: [],
        error: "failed",
      });
    });
  });
  