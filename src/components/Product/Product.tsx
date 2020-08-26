import React from "react";
import { PageSpinner, Error } from "../Common";
import { ProductList } from "./ProductList";
import { ProductHeader } from "./ProductHeader";
import { useSortedProductList } from "./useSortedProductList";
import { LoadingStatus } from "../../state";

export const Product = () => {
    
 const [products, title, status, error] =  useSortedProductList();
 const renderProducts = () => {
    if(status === LoadingStatus.Loading) return <PageSpinner />
    if(status === LoadingStatus.Error) return <Error error={error!} />
    return  <ProductList products={products} />
 }

  return (
    <section>  
       <ProductHeader title={title} />
        {renderProducts()}
    </section>
  );
}
