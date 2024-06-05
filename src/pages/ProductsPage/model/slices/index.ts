import { combineReducers } from '@reduxjs/toolkit';
import { ProductsReducer } from '@/entities/Product';
import { ProductsPageSchema } from '../types';

export const productsPageReducers = combineReducers<ProductsPageSchema>({
  products: ProductsReducer,
});
