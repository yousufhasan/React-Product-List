import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore, errorMockState, loadingMockState, successMockState } from '../../../test';
import { Product } from '../Product';

const store = mockStore(loadingMockState);

describe('Product Component', ()=> {
    it('shows spinner in case of loading state', () => {
        const { getByTestId } = render(
        <Provider store={mockStore(loadingMockState)}> 
          <Product /> 
        </Provider> );
        
        expect(getByTestId('spinner')).toBeInTheDocument();
        expect(screen.queryByTestId('product-list')).toBeNull();
      });

      it('shows error in case of error state', () => {
        const { getByTestId } = render(
        <Provider store={mockStore(errorMockState)}> 
          <Product /> 
        </Provider> );
        
        expect(getByTestId('error')).toBeInTheDocument();
        expect(screen.queryByTestId('product-list')).toBeNull();
      });

      it('shows product list in case of success state', () => {
        const { getByTestId } = render(
        <Provider store={mockStore(successMockState)}> 
          <Product /> 
        </Provider> );
    
        expect(screen.queryByTestId('spinner')).toBeNull();
        expect(screen.queryByTestId('error')).toBeNull();
        expect(getByTestId('product-list')).toBeInTheDocument();
      
      });
});
