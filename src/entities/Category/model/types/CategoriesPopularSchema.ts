import { ICategory } from './ICategory';

export interface CategoriesPopularSchema {
  categories: ICategory[];
  isLoading: boolean;
  error: string | undefined;
}
