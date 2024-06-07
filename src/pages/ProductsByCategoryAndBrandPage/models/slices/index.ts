import { combineReducers } from '@reduxjs/toolkit';
import { ProductsByCategoryAndBrandSchema } from '../types';
import { ProductsByCategoryAndBrandReducer } from '@/entities/Product';

export const productsByCategoryAndBrandPageReducers =
  combineReducers<ProductsByCategoryAndBrandSchema>({
    productsByCategoryAndBrandPage: ProductsByCategoryAndBrandReducer,
  });
