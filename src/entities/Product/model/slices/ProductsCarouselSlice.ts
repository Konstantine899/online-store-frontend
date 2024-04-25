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
  _inited: false,
};

export const ProductsCarouselSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsCarousel.pending, (state: ProductsSchema) => {
        state.isLoading = true;
        state.error = '';
        state._inited = false;
      })
      .addCase(fetchProductsCarousel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.rows = action.payload.rows;
        state.count = action.payload.count;
        state.metaData = action.payload.metaData;
        state._inited = true;
      })
      .addCase(fetchProductsCarousel.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.rows = null;
        state._inited = false;
      });
  },
});

export const { actions: ProductsCarouselActions } = ProductsCarouselSlice;
export const { reducer: ProductsCarouselReducer } = ProductsCarouselSlice;
