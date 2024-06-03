import { combineReducers } from '@reduxjs/toolkit';
import { BrandSchema } from '../types/BrandSchema';
import { BrandReducer } from '../slices/BrandSlice';

export const EntityBrandReducers = combineReducers<BrandSchema>({
  brand: BrandReducer,
});
