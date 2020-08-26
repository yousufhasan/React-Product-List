export interface Product {
    id: string;
    name: string;
    salePrice: number;
    retailPrice: number;
    imageUrl: string;
    quantityAvailable: number;
  }
  
  export interface MetaData {
    query: string;
    total: number;
    page: number;
    pages: number;
  }
  
  export interface ProductResponse {
    metadata: MetaData;
    results: Product[];
  }