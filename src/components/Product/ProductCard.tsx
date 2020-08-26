import React from "react";
import { Product } from "../../model";

export const ProductCard = ({imageUrl, name, quantityAvailable, retailPrice, salePrice}: Product) => {

    const centsToDollar = (value: number) => (value/ 100).toFixed(2);
    const showRetailPrice = () => retailPrice ? `$${centsToDollar(retailPrice)}`: ' ';
    const showSoldOut = () => quantityAvailable === 0 ? <div className="sold-out">SOLD OUT</div>: "";

    return (
        <div className="card" data-testid="product-card">
            <div className="card-img">
                 <img src={imageUrl} 
                    className="img-fluid img-center" 
                    alt={name}
                    data-testid="product-image"/>
                 {showSoldOut()}
            </div>   
            <div className="card-body">
                <h5 className="card-title" data-testid="product-title">{name}</h5>
                <h6 className="retail-price" data-testid="retail-price">{showRetailPrice()}</h6>
                <h3 className="sale-price" data-testid="sale-price">${centsToDollar(salePrice)}</h3>
            </div>
        </div>
    );
}