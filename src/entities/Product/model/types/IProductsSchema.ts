import { IProduct } from './IProduct';

export interface IMetaData {
  totalCount: number;
  lastPage: number;
  currentPage: number;
  nextPage: number;
  previousPage: number;
  limit?: number;
}

export type TProduct = Omit<IProduct, 'properties'>;

export type TSortOrder = 'asc' | 'desc';
export type TSortLimit = `5` | `10` | `20`;

export interface IProductsSchema {
  metaData: IMetaData;
  count: number;
  rows: TProduct[];
  search: string;
  sortOrder: TSortOrder;
}
