import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllBrandsByCategorySchema } from '../types/AllBrandsByCategorySchema';
import { fetchAllBrandsByCategory } from '../services/fetchAllBrandsByCategory';
import { IBrand } from '../types/IBrand';

const initialState: AllBrandsByCategorySchema = {
  brands: [],
  isLoading: false,
  error: '',
};

export const AllBrandsByCategorySlice = createSlice({
  name: 'AllBrandsByCategorySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllBrandsByCategory.pending,
        (state: AllBrandsByCategorySchema) => {
          state.isLoading = true;
          state.error = '';
          state.brands = [];
        },
      )
      .addCase(
        fetchAllBrandsByCategory.fulfilled,
        (state: AllBrandsByCategorySchema, action: PayloadAction<IBrand[]>) => {
          state.isLoading = true;
          state.error = '';
          state.brands = action.payload;
        },
      )
      .addCase(
        fetchAllBrandsByCategory.rejected,
        (state: AllBrandsByCategorySchema, action: PayloadAction<string>) => {
          state.isLoading = true;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: AllBrandsByCategoryActions } = AllBrandsByCategorySlice;
export const { reducer: AllBrandsByCategoryReducer } = AllBrandsByCategorySlice;
