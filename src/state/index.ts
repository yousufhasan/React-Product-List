import { MetaData, Product } from "../model";
import { PriceSortOptions, LoadingStatus } from "./enums";

export interface ProductListResultPage {
  products: Product[];
  apiStatus: LoadingStatus;
  error?: string;
}

export interface AppState {
  productList: {
    page: ProductListResultPage;
    meta: MetaData;
    sort: PriceSortOptions;
  };
}

export { getProductList, changeSortOption } from "./actions";
export { configureStore } from "./store";
export { PriceSortOptions, LoadingStatus };
