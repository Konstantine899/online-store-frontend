import { combineReducers } from '@reduxjs/toolkit';
import { CategoryReducer } from '../slices/CategorySlice';
import { ICategorySchema } from '../types/ICategorySchema';

export const categoryReducers = combineReducers<ICategorySchema>({
  category: CategoryReducer,
});
