// api
export { useCategory } from './api/categoryApi';

//ui
export { CategoriesBurgerMenu } from './ui/CategoriesBurgerMenu/CategoriesBurgerMenu';
export { CategoriesPopular } from './ui/CategoriesPopular/CategoriesPopular';

// slices
export { CategoryActions } from './model/slices/CategorySlice';
export { categoryReducers } from './model/slices';

// selectors
export {
  selectCategoryId,
  selectCategory,
} from './model/selectors/selectCategory';

// types
export type { ICategorySchema } from './model/types/ICategorySchema';
export type { ICategory } from './model/types/ICategory';
