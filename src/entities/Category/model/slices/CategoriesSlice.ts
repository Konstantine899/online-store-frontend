import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, CategorySchema } from '../types/CategorySchema';
import { fetchCategoriesList } from '../services/fetchCategoriesList';

const initialState: CategorySchema = {
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
      .addCase(fetchCategoriesList.pending, (state: CategorySchema) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(
        fetchCategoriesList.fulfilled,
        (state: CategorySchema, action: PayloadAction<Category[]>) => {
          state.isLoading = false;
          state.categories = action.payload;
        },
      )
      .addCase(
        fetchCategoriesList.rejected,
        (state: CategorySchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: CategoriesActions } = CategoriesSlice;
export const { reducer: CategoriesReducer } = CategoriesSlice;
