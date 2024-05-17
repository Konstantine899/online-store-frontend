import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesSchema } from '../types/CategoriesSchema';
import { fetchAllCategories } from '../services/fetchAllCategories';
import { ICategory } from '../../model/types/ICategory';

const initialState: CategoriesSchema = {
  categories: [],
  isLoading: false,
  error: undefined,
};

export const CategoriesSlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state: CategoriesSchema) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchAllCategories.fulfilled,
        (state: CategoriesSchema, action: PayloadAction<ICategory[]>) => {
          state.isLoading = false;
          state.categories = action.payload;
        },
      )
      .addCase(
        fetchAllCategories.rejected,
        (
          state: CategoriesSchema,
          action: PayloadAction<string | undefined>,
        ) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: CategoriesActions } = CategoriesSlice;
export const { reducer: CategoriesReducer } = CategoriesSlice;
