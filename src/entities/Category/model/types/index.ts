import { CategoriesSchema } from './CategoriesSchema';
import { CategorySchema } from './CategorySchema';
import { CategoriesPopularSchema } from './CategoriesPopularSchema';

export interface EntityCategorySchema {
  categories: CategoriesSchema;
  category: CategorySchema;
  categoriesPopular: CategoriesPopularSchema;
}
