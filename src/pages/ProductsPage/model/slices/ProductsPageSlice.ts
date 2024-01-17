import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsPageSchema } from '../types/ProductsPageSchema';
import { fetchProductsListPage } from '@/pages/ProductsPage/model/services/fetchProductsListPage/fetchProductsListPage';

const initialState: ProductsPageSchema = {
  isLoading: false,
  error: '',
};

export const ProductsPageSlice = createSlice({
  name: 'ProductsPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsListPage.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.productsList = null;
      })
      .addCase(fetchProductsListPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.productsList = action.payload;
      })
      .addCase(fetchProductsListPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.productsList = null;
      });
  },
});

export const { actions: ProductsPageActions } = ProductsPageSlice;
export const { reducer: ProductsPageReducer } = ProductsPageSlice;
