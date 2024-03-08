import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from '../types/IBrand';

const initialState: IBrand = {
  id: 0,
  name: '',
};

export const FilteringByBrandIdSlice = createSlice({
  name: 'FilteringByBrandIdSlice',
  initialState,
  reducers: {
    setBrandId: (state: IBrand, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { actions: FilteringByBrandIdActions } = FilteringByBrandIdSlice;
export const { reducer: FilteringByBrandIdReducer } = FilteringByBrandIdSlice;
