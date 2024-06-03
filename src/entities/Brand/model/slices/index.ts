import { combineReducers } from '@reduxjs/toolkit';
import { BrandSchema } from '../types/BrandSchema';
import { BrandReducer } from '../slices/BrandSlice';

export const brandReducers = combineReducers<BrandSchema>({
  brand: BrandReducer,
});
