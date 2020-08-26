import React from "react";
import { Product } from "../../model";
import { ProductCard } from "./ProductCard";

interface ProductListProps{
    products: Product[]
}
export const ProductList = ({products}: ProductListProps) => {
   const renderProducts = () => {
        return products && products.map((product)=> {
            return (
                    <div key={product.id} className="col-12 col-sm-12 col-md-3 col-xl-3">
                        <ProductCard {...product} />
                    </div>
                );
        });
    }
  return (
    <>
    <div className="row" data-testid="product-list">
        {renderProducts()}
    </div>
    </>
  );
}
