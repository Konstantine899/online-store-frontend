import { combineReducers } from '@reduxjs/toolkit';
import { IBrandSchema } from '../types/IBrandSchema';
import { BrandReducer } from '../slices/BrandSlice';

export const brandReducers = combineReducers<IBrandSchema>({
  brand: BrandReducer,
});
