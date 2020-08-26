import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, getProductList, PriceSortOptions } from "../../state";
import { Product } from "../../model";

export const useSortedProductList: () => [Product[], string, string, string?]  = () =>
{   
    const dispatch = useDispatch();
    const { products, title, sort, status, error } = useSelector((state: AppState) => ({
        products: state.productList.page.products,    
        title: state.productList.meta.query,
        sort: state.productList.sort,
        status: state.productList.page.apiStatus,
        error: state.productList.page.error,
    }));
    useEffect(() => {
      dispatch(getProductList());
    }, [sort, dispatch]);

    return [getSortedProductList(products, sort), title, status, error,];
}

export const getSortedProductList = (arr: Product[],col: string) => {
  if(col === PriceSortOptions.High) {
    return arr.sort((a, b) => b.salePrice - a.salePrice);
  }
  return arr.sort((a, b) => a.salePrice - b.salePrice);
}