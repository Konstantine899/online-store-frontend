import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersSchema } from '../types/FiltersSchema';

const initialState: FiltersSchema = {
  search: '',
};

export const FiltersSlice = createSlice({
  name: 'Filters',
  initialState,
  reducers: {
    setSearch: (state: FiltersSchema, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { actions: FiltersActions } = FiltersSlice;
export const { reducer: FiltersReducer } = FiltersSlice;
