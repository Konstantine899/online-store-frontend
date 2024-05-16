import { combineReducers } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types';
import { ProductsCarouselReducer } from '@/entities/Product';

export const mainPageReducers = combineReducers<MainPageSchema>({
  productsCarouselList: ProductsCarouselReducer,
});
