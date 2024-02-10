import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '../types/BrandSchema';

const initialState: IBrand = {
  id: 0,
  name: '',
};

export const BrandSlice = createSlice({
  name: 'Brand',
  initialState,
  reducers: {
    setBrandId: (state: IBrand, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { actions: BrandActions } = BrandSlice;
export const { reducer: BrandReducer } = BrandSlice;
