import { createSlice } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/ProductsSchema';
import { fetchProductsByCategoryCarousel } from '../services/fetchProductsByCategoryCarousel';

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

export const ProductsByCategoryCarouselSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProductsByCategoryCarousel.pending,
        (state: ProductsSchema) => {
          state.isLoading = true;
          state.error = '';
          state._inited = false;
        },
      )
      .addCase(fetchProductsByCategoryCarousel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.rows = action.payload.rows;
        state.count = action.payload.count;
        state.metaData = action.payload.metaData;
        state._inited = true;
      })
      .addCase(fetchProductsByCategoryCarousel.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state._inited = false;
      });
  },
});

export const { actions: ProductsByCategoryCarouselActions } =
  ProductsByCategoryCarouselSlice;
export const { reducer: ProductsByCategoryCarouselReducer } =
  ProductsByCategoryCarouselSlice;
