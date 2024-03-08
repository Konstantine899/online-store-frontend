import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllBrandsSchema } from '../types/AllBrandsSchema';
import { FetchAllBrands } from '../../model/services/FetchAllBrands';
import { IBrand } from '../types/IBrand';

const initialState: AllBrandsSchema = {
  brands: [],
  isLoading: false,
  error: '',
};

export const AllBrandsSlice = createSlice({
  name: 'Brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllBrands.pending, (state: AllBrandsSchema) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        FetchAllBrands.fulfilled,
        (state: AllBrandsSchema, action: PayloadAction<IBrand[]>) => {
          state.isLoading = false;
          state.brands = action.payload;
        },
      )
      .addCase(
        FetchAllBrands.rejected,
        (state: AllBrandsSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: AllBrandsActions } = AllBrandsSlice;
export const { reducer: AllBrandsReducer } = AllBrandsSlice;
