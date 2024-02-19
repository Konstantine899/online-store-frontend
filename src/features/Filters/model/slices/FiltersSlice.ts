import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersSchema } from '../types/FiltersSchema';
import { ISortOrder } from '@/shared/types/ISortOrder';

const initialState: FiltersSchema = {
  search: '',
  sortingOrder: 'asc',
};

export const FiltersSlice = createSlice({
  name: 'Filters',
  initialState,
  reducers: {
    setSearch: (state: FiltersSchema, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSortingOrder: (
      state: FiltersSchema,
      action: PayloadAction<ISortOrder>,
    ) => {
      state.sortingOrder = action.payload;
    },
  },
});

export const { actions: FiltersActions } = FiltersSlice;
export const { reducer: FiltersReducer } = FiltersSlice;
