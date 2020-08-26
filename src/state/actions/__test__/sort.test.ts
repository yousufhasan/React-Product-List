import { changeSortOption, PriceSortOptions } from "../../";
import { PRODUCT_LIST_CHANGE_SORT } from "../types";

describe("changeSortOption", () => {
  it("returns action with correct type and payload", () => {
    let action = changeSortOption(PriceSortOptions.High);
    expect(action.type).toEqual(PRODUCT_LIST_CHANGE_SORT);
    expect(action.payload).toEqual(PriceSortOptions.High);

    action = changeSortOption(PriceSortOptions.Low);
    expect(action.type).toEqual(PRODUCT_LIST_CHANGE_SORT);
    expect(action.payload).toEqual(PriceSortOptions.Low);
  });
});
