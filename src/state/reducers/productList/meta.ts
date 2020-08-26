import { Reducer } from "redux";
import { MetaData } from "../../../model";
import { ProductListMetaAction, PRODUCT_LIST_META } from "../../actions";

const productListMetaInitialState: MetaData = {
  query: "",
  total: 0,
  page: 0,
  pages: 0,
};

const metaReducer: Reducer<MetaData, ProductListMetaAction> = (
  state = productListMetaInitialState,
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_META:
      return {
        ...action.payload,
      } as MetaData;
    default:
      return state;
  }
};

export { metaReducer };
