import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '../types/IBrand';

const initialState: IBrand = {
  id: 0,
  name: '',
};

export const BrandSlice = createSlice({
  name: 'BrandSlice',
  initialState,
  reducers: {
    setBrandId: (state: IBrand, { payload }: PayloadAction<number>) => {
      state.id = payload;
    },
  },
});

export const { actions: BrandActions } = BrandSlice;
export const { reducer: BrandReducer } = BrandSlice;
