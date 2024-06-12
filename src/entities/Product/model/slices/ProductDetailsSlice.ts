import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../types/IProduct';

const initialState: IProduct = {
  id: 0,
  name: '',
  properties: [],
  category_id: 0,
  brand_id: 0,
  image: '',
  price: 0,
  rating: 0,
};

export const ProductDetailsSlice = createSlice({
  name: 'ProductDetailsSliceSlice',
  initialState,
  reducers: {},
});

export const { actions: ProductDetailsPageActions } = ProductDetailsSlice;
export const { reducer: ProductDetailsReducer } = ProductDetailsSlice;
