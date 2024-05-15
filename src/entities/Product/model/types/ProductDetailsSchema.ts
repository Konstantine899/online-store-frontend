import { IProductDetails } from './IProductDetails';

export interface ProductDetailsSchema {
  productDetails: IProductDetails;
  isLoading: boolean;
  _inited: boolean;
  error?: string;
}
