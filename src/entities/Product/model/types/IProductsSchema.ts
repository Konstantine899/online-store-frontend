import { ISortOrder } from '@/shared/types/ISortOrder';
import { IProduct } from '@/entities/Product/model/types/IProduct';

export interface IMetaData {
  totalCount: number;
  lastPage: number;
  currentPage: number;
  nextPage: number;
  previousPage: number;
  limit?: number;
}

export type TProduct = Omit<IProduct, 'properties'>;

export interface IProductsSchema {
  metaData: IMetaData;
  count: number;
  rows: TProduct[];
  search: string;
  sortOrder: ISortOrder;
  isLoading: boolean;
  error?: string;
  _inited: boolean;
}
