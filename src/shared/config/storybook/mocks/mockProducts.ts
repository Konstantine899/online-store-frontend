interface IProductProperty {
  id: number;
  name: string;
  value: string;
  product_id: number;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category_id: number;
  brand_id: number;
  properties: IProductProperty[];
}

interface IMetaData {
  totalCount: number;
  lastPage: number;
  currentPage: number;
  nextPage: number;
  previousPage: number;
  limit?: number;
}

type TProduct = Omit<IProduct, 'properties'>;

type TSortOrder = 'asc' | 'desc';

interface IProductsSchema {
  metaData: IMetaData;
  count: number;
  rows: TProduct[];
  search: string;
  sortOrder: TSortOrder;
}

export const mockProducts: IProductsSchema = {
  count: 10,
  metaData: {
    currentPage: 1,
    lastPage: 2,
    limit: 5,
    nextPage: 2,
    previousPage: 0,
    totalCount: 10,
  },
  rows: [
    {
      brand_id: 2,
      category_id: 1,
      id: 19,
      image: 'c59fb5ba-4656-4457-bff8-3967a461a28d.jpg',
      name: 'Смартфон Xiaomi 13T 12GB/256GB Black EU',
      price: 1999,
      rating: 0,
    },
  ],
  search: '',
  sortOrder: 'asc',
};
