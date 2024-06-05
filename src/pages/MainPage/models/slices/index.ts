import { combineReducers } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types';
import { ProductsByCategoryCarouselReducer } from '@/entities/Product';

export const mainPageReducers = combineReducers<MainPageSchema>({
  productsByCategoryCarousel: ProductsByCategoryCarouselReducer,
});
