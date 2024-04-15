import { IProductDetails } from './IProductDetails';

export interface ProductDetailsSchema {
  productDetails: IProductDetails;
  isLoading: boolean;
  error: string;
  _inited: boolean;
}
