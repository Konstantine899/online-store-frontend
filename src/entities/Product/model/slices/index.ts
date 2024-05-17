import { combineReducers } from '@reduxjs/toolkit';
import { EntityProductSchema } from '../types';
import { ProductsReducer } from '../slices/ProductsSlice';
import { ProductDetailsReducer } from '../slices/ProductDetailsSlice';
import { ProductsByCategoryCarouselReducer } from '../slices/ProductsByCategoryCarouselSlice';

export const entityProductReducers = combineReducers<EntityProductSchema>({
  products: ProductsReducer,
  productDetails: ProductDetailsReducer,
  productsByCategoryCarousel: ProductsByCategoryCarouselReducer,
});
