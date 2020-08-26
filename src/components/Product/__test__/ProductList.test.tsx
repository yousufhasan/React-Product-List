import React from 'react';
import { render, screen } from '@testing-library/react';
import { successMockState } from '../../../test';
import { ProductList } from '../ProductList';

describe('Product List Component', ()=> {
    it('renders product list with correct number of records', () => {
          render(
            <ProductList products = {successMockState.productList.page.products} />  
          );
          const cards = screen.queryAllByTestId('product-card');
          expect(cards.length).toEqual(successMockState.productList.meta.total);
    });
});