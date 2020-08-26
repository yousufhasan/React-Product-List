import { getSortedProductList } from '../useSortedProductList';
import { successMockState } from '../../../test';
import { PriceSortOptions } from '../../../state';

describe('useSortedProductList', () => {
    it('sorts the list correctly', ()=> {
       let list = getSortedProductList(successMockState.productList.page.products, 
        PriceSortOptions.High);
       expect(list[0].salePrice).toBeGreaterThan(list[1].salePrice);

       list = getSortedProductList(successMockState.productList.page.products, 
        PriceSortOptions.Low);
       expect(list[0].salePrice).toBeLessThan(list[1].salePrice);

    });
});