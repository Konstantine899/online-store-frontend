import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategory } from '../../model/types/ICategory';

const initialState: ICategory = {
  id: 0,
  name: '',
};

export const FilteringByCategoryIdSlice = createSlice({
  name: 'CategorySliceSlice',
  initialState,
  reducers: {
    setCategoryId: (state: ICategory, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { actions: FilteringByCategoryIdActions } =
  FilteringByCategoryIdSlice;
export const { reducer: FilteringByCategoryIdReducer } =
  FilteringByCategoryIdSlice;
