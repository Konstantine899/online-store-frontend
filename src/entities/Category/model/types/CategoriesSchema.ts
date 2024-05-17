import { ICategory } from './ICategory';

export interface CategoriesSchema {
  categories: ICategory[];
  isLoading: boolean;
  error?: string;
}
