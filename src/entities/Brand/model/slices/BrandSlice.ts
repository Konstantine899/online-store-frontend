import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandSchema } from '../types/BrandSchema';
import { fetchBrand } from '../services/fetchBrand';
import { IBrand } from '../types/IBrand';

const initialState: BrandSchema = {
  brand: { id: 0, name: '' },
  isLoading: false,
  error: '',
};

export const BrandSlice = createSlice({
  name: 'BrandSlice',
  initialState,
  reducers: {
    setBrandId: (state: BrandSchema, action: PayloadAction<number>) => {
      state.brand.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrand.pending, (state: BrandSchema) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(
        fetchBrand.fulfilled,
        (state: BrandSchema, action: PayloadAction<IBrand>) => {
          state.isLoading = false;
          state.brand.id = action.payload.id;
          state.brand.name = action.payload.name;
        },
      )
      .addCase(
        fetchBrand.rejected,
        (state: BrandSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: BrandActions } = BrandSlice;
export const { reducer: BrandReducer } = BrandSlice;
