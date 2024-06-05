import { combineReducers } from '@reduxjs/toolkit';
import { ProductsByCategoryPageSchema } from '../types';
import { ProductsByCategoryReducer } from '@/entities/Product';

export const productsByCategoryReducers =
  combineReducers<ProductsByCategoryPageSchema>({
    productsByCategory: ProductsByCategoryReducer,
  });
