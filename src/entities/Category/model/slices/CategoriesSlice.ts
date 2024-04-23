import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllCategoriesSchema } from '../types/AllCategoriesSchema';
import { fetchAllCategories } from '../services/fetchAllCategories';
import { ICategory } from '../../model/types/ICategory';

const initialState: AllCategoriesSchema = {
  categories: [],
  isLoading: false,
  error: '',
};

export const CategoriesSlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state: AllCategoriesSchema) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(
        fetchAllCategories.fulfilled,
        (state: AllCategoriesSchema, action: PayloadAction<ICategory[]>) => {
          state.isLoading = false;
          state.categories = action.payload;
        },
      )
      .addCase(
        fetchAllCategories.rejected,
        (state: AllCategoriesSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: CategoriesActions } = CategoriesSlice;
export const { reducer: CategoriesReducer } = CategoriesSlice;
