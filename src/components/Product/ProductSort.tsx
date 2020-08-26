import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../state";
import { changeSortOption, PriceSortOptions } from "../../state";

export const ProductSort = () => {
    const dispatch = useDispatch();
    const sort = useSelector((state: AppState) => state.productList.sort);
    const changeSort = (event: React.ChangeEvent<HTMLSelectElement>)=> {
      dispatch(changeSortOption(event.target.value as PriceSortOptions));
    }
  return (
    <div className="form-group product-sort">
    <select className="form-control" value={sort} onChange={changeSort}>
      <option value={PriceSortOptions.High}>Highest Price</option>
      <option value={PriceSortOptions.Low}>Lowest Price</option>
    </select>
  </div>
  );
}


