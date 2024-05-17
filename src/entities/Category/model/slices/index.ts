import { combineReducers } from '@reduxjs/toolkit';
import { EntityCategorySchema } from '../types';
import { CategoryReducer } from '../slices/CategorySlice';
import { CategoriesReducer } from '../slices/CategoriesSlice';

export const entityCategoryReducers = combineReducers<EntityCategorySchema>({
  category: CategoryReducer,
  categories: CategoriesReducer,
});
