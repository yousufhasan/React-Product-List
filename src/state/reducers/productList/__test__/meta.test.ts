import { ProductListMetaAction, PRODUCT_LIST_META } from "../../../actions";
import { successMockState } from "../../../../test";
import { metaReducer } from "../meta";

describe("metaReducer", () => {
  it("handles action of type PRODUCT_LIST_META", () => {
    const action: ProductListMetaAction = {
      type: PRODUCT_LIST_META,
      payload: successMockState.productList.meta,
    };

    const state = metaReducer(
      {
        page: 0,
        pages: 0,
        query: "",
        total: 0,
      },
      action
    );

    expect(state).toEqual(successMockState.productList.meta);
  });
});
