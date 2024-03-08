import { IProductDetails } from '@/entities/Product';

export interface ProductDetailsPageSchema {
  productDetails: IProductDetails;
  isLoading: boolean;
  error: string;
}
