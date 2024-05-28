import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesPopularSchema } from '../types/CategoriesPopularSchema';
import { fetchCategoriesPopular } from '../services/fetchCategoriesPopular';
import { ICategory } from '../types/ICategory';

const initialState: CategoriesPopularSchema = {
  categories: [],
  isLoading: false,
  error: '',
};

export const CategoriesPopularSlice = createSlice({
  name: 'CategoriesPopularSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCategoriesPopular.pending,
        (state: CategoriesPopularSchema) => {
          state.isLoading = true;
          state.categories = [];
          state.error = '';
        },
      )
      .addCase(
        fetchCategoriesPopular.fulfilled,
        (
          state: CategoriesPopularSchema,
          action: PayloadAction<ICategory[]>,
        ) => {
          state.isLoading = false;
          state.categories = action.payload;
          state.error = '';
        },
      )
      .addCase(
        fetchCategoriesPopular.rejected,
        (
          state: CategoriesPopularSchema,
          action: PayloadAction<string | undefined>,
        ) => {
          state.isLoading = false;
          state.categories = [];
          state.error = action.payload;
        },
      );
  },
});

export const { actions: CategoriesPopularActions } = CategoriesPopularSlice;
export const { reducer: CategoriesPopularReducer } = CategoriesPopularSlice;
