import { IBrand } from './IBrand';

export interface BrandSchema {
  brand: IBrand;
  isLoading: boolean;
  error?: string;
}
