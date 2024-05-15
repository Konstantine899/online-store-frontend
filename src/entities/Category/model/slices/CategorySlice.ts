import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategorySchema } from '../types/CategorySchema';
import { fetchCategory } from '../services/fetchCategory';
import { ICategory } from '../types/ICategory';

const initialState: CategorySchema = {
  category: { id: 0, name: '', image: '' },
  isLoading: false,
  error: undefined,
};

export const CategorySliceSlice = createSlice({
  name: 'CategorySliceSlice',
  initialState,
  reducers: {
    setCategoryId: (state: CategorySchema, action: PayloadAction<number>) => {
      state.category.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state: CategorySchema) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchCategory.fulfilled,
        (state: CategorySchema, action: PayloadAction<ICategory>) => {
          state.isLoading = false;
          state.category.id = action.payload.id;
          state.category.name = action.payload.name;
        },
      )
      .addCase(
        fetchCategory.rejected,
        (state: CategorySchema, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: CategoryActions } = CategorySliceSlice;
export const { reducer: CategoryReducer } = CategorySliceSlice;
