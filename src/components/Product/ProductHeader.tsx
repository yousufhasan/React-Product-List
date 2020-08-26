import React from "react";
import { ProductSort } from "./ProductSort";

interface ProductHeaderProps {
    title: string
}

export const ProductHeader = ({title}: ProductHeaderProps) =>{
    return (
        <div className="row border product-header">
        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <h4 className="heading text-capitalize">
                {title}
            </h4>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-3">
              <ProductSort/>
        </div>
    </div>
    )
}