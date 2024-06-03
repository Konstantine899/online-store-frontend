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
export type { CategorySchema } from './model/types/CategorySchema';
export type { ICategory } from './model/types/ICategory';
