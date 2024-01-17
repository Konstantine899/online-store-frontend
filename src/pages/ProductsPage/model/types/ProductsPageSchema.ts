export interface ProductsListMetaData {
  totalCount: number;
  lastPage: number;
  currentPage: number;
  nextPage: number;
  previousPage: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  voted: number;
  image: string;
  category_id: number;
  brand_id: number;
}

export interface ProductsList {
  metaData: ProductsListMetaData;
  count: number;
  rows: Product[];
}

export interface ProductsPageSchema {
  productsList?: ProductsList;
  isLoading?: boolean;
  error?: string;
}
