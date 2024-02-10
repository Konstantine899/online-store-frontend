import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandSchema, IBrand } from '../types/BrandSchema';
import { FetchAllBrands } from '../../model/services/FetchAllBrands';

const initialState: BrandSchema = {
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
      .addCase(FetchAllBrands.pending, (state: BrandSchema) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        FetchAllBrands.fulfilled,
        (state: BrandSchema, action: PayloadAction<IBrand[]>) => {
          state.isLoading = false;
          state.brands = action.payload;
        },
      )
      .addCase(
        FetchAllBrands.rejected,
        (state: BrandSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: AllBrandsActions } = AllBrandsSlice;
export const { reducer: AllBrandsReducer } = AllBrandsSlice;
