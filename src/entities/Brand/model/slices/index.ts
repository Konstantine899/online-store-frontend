import { combineReducers } from '@reduxjs/toolkit';
import { EntityBrandSchema } from '../types';
import { BrandReducer } from '../slices/BrandSlice';
import { AllBrandsByCategoryReducer } from '../slices/AllBrandsByCategorySlice';

export const EntityBrandReducers = combineReducers<EntityBrandSchema>({
  brand: BrandReducer,
  allBrands: AllBrandsByCategoryReducer,
  allBrandsByCategory: AllBrandsByCategoryReducer,
});
