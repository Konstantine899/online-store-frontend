import { ICategory } from './ICategory';

export interface CategorySchema {
  category: ICategory;
  isLoading: boolean;
  error?: string;
}
