//ui
export { CategoriesBurgerMenu } from './ui/CategoriesBurgerMenu/CategoriesBurgerMenu';
export { CategoriesPopular } from './ui/CategoriesPopular/CategoriesPopular';

// slices
export { CategoriesActions } from './model/slices/CategoriesSlice';
export { CategoryActions } from './model/slices/CategorySlice';
export { entityCategoryReducers } from './model/slices';

// selectors
export {
  selectCategories,
  selectCategoriesIsLoading,
} from './model/selectors/selectCategories';
export {
  getCategoryStateSelector,
  getCategoryIdSelector,
  getCategoryNameSelector,
} from './model/selectors/getCategoryStateSelector';

// services
export { fetchAllCategories } from './model/services/fetchAllCategories';
export { fetchCategory } from './model/services/fetchCategory';

// types
export type { EntityCategorySchema } from './model/types';
export type { ICategory } from './model/types/ICategory';
