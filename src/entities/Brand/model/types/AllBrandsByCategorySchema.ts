import { IBrand } from './IBrand';

export interface AllBrandsByCategorySchema {
  brands: IBrand[];
  isLoading: boolean;
  error: string;
}
