import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersSchema } from '../types/FiltersSchema';
import { Sort } from '@/shared/types/sort';

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
    setSortingOrder: (state: FiltersSchema, action: PayloadAction<Sort>) => {
      state.sortingOrder = action.payload;
    },
  },
});

export const { actions: FiltersActions } = FiltersSlice;
export const { reducer: FiltersReducer } = FiltersSlice;
