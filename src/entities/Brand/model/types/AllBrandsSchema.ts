import { IBrand } from './IBrand';

export interface AllBrandsSchema {
  brands: IBrand[];
  isLoading: boolean;
  error: string;
}
