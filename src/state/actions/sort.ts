import { Action } from "redux";
import { PRODUCT_LIST_CHANGE_SORT } from "./types";
import { PriceSortOptions } from "../enums";

export interface ProductListChangeSortAction extends Action {
  type: typeof PRODUCT_LIST_CHANGE_SORT;
  payload: PriceSortOptions;
}

export const changeSortOption = (
  option: PriceSortOptions
): ProductListChangeSortAction => ({
  type: PRODUCT_LIST_CHANGE_SORT,
  payload: option,
});
