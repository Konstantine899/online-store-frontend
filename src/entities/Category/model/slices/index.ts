import { combineReducers } from '@reduxjs/toolkit';
import { CategoryReducer } from '../slices/CategorySlice';
import { CategorySchema } from '../types/CategorySchema';

export const categoryReducers = combineReducers<CategorySchema>({
  category: CategoryReducer,
});
