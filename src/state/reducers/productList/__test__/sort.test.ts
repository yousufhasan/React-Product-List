import {
    ProductListChangeSortAction,
    PRODUCT_LIST_CHANGE_SORT,
  } from "../../../actions";
  import { PriceSortOptions } from "../../../enums";
  import { sortReducer } from "../sort";
  
  describe("sortReducer", () => {
    it("handles action of type PRODUCT_LIST_CHANGE_SORT", () => {
      const action: ProductListChangeSortAction = {
        type: PRODUCT_LIST_CHANGE_SORT,
        payload: PriceSortOptions.Low,
      };
  
      const state = sortReducer(PriceSortOptions.High, action);
      expect(state).toEqual(PriceSortOptions.Low);
    });
  });
  