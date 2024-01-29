export interface ProductsListMetaData {
  totalCount: number;
  lastPage: number;
  currentPage: number;
  nextPage: number;
  previousPage: number;
  limit?: number;
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

export interface ProductsPageSchema {
  metaData: ProductsListMetaData;
  count: number;
  rows: Product[];
  isLoading?: boolean;
  error?: string;
}
