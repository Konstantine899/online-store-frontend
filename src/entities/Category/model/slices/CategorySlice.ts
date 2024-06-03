import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../types/ICategory';

const initialState: ICategory = {
  id: 0,
  name: '',
  image: '',
};

export const CategorySliceSlice = createSlice({
  name: 'CategorySliceSlice',
  initialState,
  reducers: {
    setCategoryId: (state: ICategory, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { actions: CategoryActions } = CategorySliceSlice;
export const { reducer: CategoryReducer } = CategorySliceSlice;
