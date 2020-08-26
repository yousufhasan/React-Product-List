import { AppState, LoadingStatus, PriceSortOptions } from '../state';

export const initialMockState: AppState = {
      productList: {
          page: {
              apiStatus: LoadingStatus.Initial,
              products: [],
          },
          meta: {
              page: 0,
              pages: 0,
              query: '',
              total: 0
          },
          sort: PriceSortOptions.High
      }
  }

export const loadingMockState: AppState = {
    productList: {
        page: {
            apiStatus: LoadingStatus.Loading,
            products: [],
        },
        meta: {
            page: 0,
            pages: 0,
            query: '',
            total: 0
        },
        sort: PriceSortOptions.High
    }
}

export const errorMockState: AppState = {
    productList: {
        page: {
            apiStatus: LoadingStatus.Error,
            products: [],
        },
        meta: {
            page: 0,
            pages: 0,
            query: '',
            total: 0
        },
        sort: PriceSortOptions.High
    }
}


export const successMockState: AppState = {
    productList: {
        page: {
            apiStatus: LoadingStatus.Loaded,
            products: [{
                id: "1111",
                imageUrl: "testURL",
                name: "Test1",
                quantityAvailable: 12,
                retailPrice: 1500,
                salePrice: 500
            },
            {
                id: "2222",
                imageUrl: "test2URL",
                name: "Test2",
                quantityAvailable: 0,
                retailPrice: 2500,
                salePrice: 1000
            }],
        },
        meta: {
            page: 1,
            pages: 1,
            query: 'Best Seller',
            total: 2
        },
        sort: PriceSortOptions.High
    }
}