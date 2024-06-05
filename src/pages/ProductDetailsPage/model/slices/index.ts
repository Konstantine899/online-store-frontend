import { combineReducers } from '@reduxjs/toolkit';
import { ProductDetailsPageSchema } from '../types';
import { ProductDetailsReducer } from '@/entities/Product';

export const productDetailsPageReducers =
  combineReducers<ProductDetailsPageSchema>({
    productDetails: ProductDetailsReducer,
  });
