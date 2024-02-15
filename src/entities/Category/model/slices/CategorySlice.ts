import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../types/CategorySchema';

const initialState: Category = {
  id: 0,
  name: '',
};

export const CategorySliceSlice = createSlice({
  name: 'CategorySliceSlice',
  initialState,
  reducers: {
    setCategoryId: (state: Category, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { actions: CategoryActions } = CategorySliceSlice;
export const { reducer: CategoryReducer } = CategorySliceSlice;
