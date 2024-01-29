import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsPageSchema } from '../types/ProductsPageSchema';
import { fetchProductsListPage } from '../services/fetchProductsListPage/fetchProductsListPage';

const initialState: ProductsPageSchema = {
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
  isLoading: false,
  error: '',
};

export const ProductsPageSlice = createSlice({
  name: 'ProductsPage',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.metaData.currentPage = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.metaData.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsListPage.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.rows = null;
      })
      .addCase(fetchProductsListPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.rows = action.payload.rows;
        state.count = action.payload.count;
        state.metaData = action.payload.metaData;
      })
      .addCase(fetchProductsListPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.rows = null;
      });
  },
});

export const { actions: ProductsPageActions } = ProductsPageSlice;
export const { reducer: ProductsPageReducer } = ProductsPageSlice;
