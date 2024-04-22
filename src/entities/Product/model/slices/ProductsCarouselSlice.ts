import { createSlice } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/ProductsSchema';
import { fetchProductsCarousel } from '../services/fetchProductsCarousel';

const initialState: ProductsSchema = {
  rows: [],
  count: 0,
  metaData: {
    previousPage: 0,
    currentPage: 1,
    lastPage: 0,
    nextPage: 0,
    totalCount: 0,
    limit: 0,
  },
  search: '',
  sortingOrder: 'asc',
  isLoading: false,
  error: '',
};

export const ProductsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsCarousel.pending, (state: ProductsSchema) => {
        state.isLoading = true;
        state.error = '';
        state.rows = null;
      })
      .addCase(fetchProductsCarousel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.rows = action.payload.rows;
        state.count = action.payload.count;
        state.metaData = action.payload.metaData;
      })
      .addCase(fetchProductsCarousel.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.rows = null;
      });
  },
});

export const { actions: ProductsCarouselActions } = ProductsSlice;
export const { reducer: ProductsCarouselReducer } = ProductsSlice;
