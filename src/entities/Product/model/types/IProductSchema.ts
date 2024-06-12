import { IProduct } from './IProduct';

export interface IProductSchema {
  product: IProduct;
  isLoading: boolean;
  _inited: boolean;
  error?: string;
}
