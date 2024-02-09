import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/ProductsSchema';
import { FetchProducts } from '../services/FetchProducts';

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
  isLoading: false,
  error: '',
};

export const ProductsSlice = createSlice({
  name: 'ProductsSlice',
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
      .addCase(FetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = '';
        state.rows = null;
      })
      .addCase(FetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.rows = action.payload.rows;
        state.count = action.payload.count;
        state.metaData = action.payload.metaData;
      })
      .addCase(FetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.rows = null;
      });
  },
});

export const { actions: ProductsPageActions } = ProductsSlice;
export const { reducer: ProductsPageReducer } = ProductsSlice;
