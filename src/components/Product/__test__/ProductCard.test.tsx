import React from 'react';
import { render } from '@testing-library/react';
import { successMockState } from '../../../test';
import { ProductCard } from '../ProductCard';

describe('Product Card Component', ()=> {
    it('renders card data with correct title', () => {
      const {id, imageUrl, name, quantityAvailable, retailPrice, salePrice} = 
      successMockState.productList.page.products[0];
      const { getByTestId } = render(
      <ProductCard 
      id={id}
      imageUrl={imageUrl} 
      name={name} 
      quantityAvailable={quantityAvailable} 
      retailPrice={retailPrice}
      salePrice={salePrice}
    /> 
    );
    expect(getByTestId('product-title')).toHaveTextContent(name);
    expect(getByTestId('retail-price')).toHaveTextContent((retailPrice/ 100).toFixed(2))
    expect(getByTestId('sale-price')).toHaveTextContent((salePrice/ 100).toFixed(2))
    expect(getByTestId('product-image')).toBeInTheDocument();
  });
});

