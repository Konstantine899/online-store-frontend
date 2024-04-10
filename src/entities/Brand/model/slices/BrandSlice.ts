import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandSchema } from '../types/BrandSchema';
import { fetchBrand } from '../services/fetchBrand';
import { IBrand } from '../types/IBrand';
import { BRAND_ID } from '@/shared/consts/localstorage';

const initialState: BrandSchema = {
  brand: { id: 0, name: '' },
  isLoading: false,
  error: '',
};

export const BrandSlice = createSlice({
  name: 'BrandSlice',
  initialState,
  reducers: {
    initBrand: (state: BrandSchema) => {
      state.brand.id = JSON.parse(localStorage.getItem(BRAND_ID));
    },
    setBrandId: (state: BrandSchema, { payload }: PayloadAction<number>) => {
      localStorage.setItem(BRAND_ID, JSON.stringify(payload));
      state.brand.id = JSON.parse(localStorage.getItem(BRAND_ID));
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
