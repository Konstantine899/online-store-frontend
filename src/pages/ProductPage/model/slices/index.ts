import { combineReducers } from '@reduxjs/toolkit';
import { ProductPageSchema } from '../types';
import { ProductDetailsReducer } from '@/entities/Product';

export const productDetailsPageReducers = combineReducers<ProductPageSchema>({
  product: ProductDetailsReducer,
});
