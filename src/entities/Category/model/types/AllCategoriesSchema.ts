import { ICategory } from './ICategory';

export interface AllCategoriesSchema {
  categories: ICategory[];
  isLoading: boolean;
  error: string;
}
