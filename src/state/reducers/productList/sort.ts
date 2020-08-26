import { Reducer } from "redux";
import { PriceSortOptions } from "../../enums";
import {
  PRODUCT_LIST_CHANGE_SORT,
  ProductListChangeSortAction,
} from "../../actions";

export const sortReducer: Reducer<
  PriceSortOptions,
  ProductListChangeSortAction
> = (state = PriceSortOptions.High, action) => {
  switch (action.type) {
    case PRODUCT_LIST_CHANGE_SORT:
      return action.payload;
    default:
      return state;
  }
};
