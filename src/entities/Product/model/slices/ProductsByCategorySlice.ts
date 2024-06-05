import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductsByCategory } from '../services/fetchProductsByCategory';
import { ProductsSchema } from '../types/ProductsSchema';

const initialState: ProductsSchema = {
  rows: [],
  count: 0,
  metaData: {
    previousPage: 0,
    currentPage: 1,
    nextPage: 2,
    lastPage: 0,
    totalCount: 0,
    limit: 5,
  },
  search: '',
  sortingOrder: 'asc',
  isLoading: false,
  error: undefined,
  _inited: false,
};

export const ProductsByCategorySlice = createSlice({
  name: 'ProductsByCategorySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state: ProductsSchema) => {
        state.isLoading = true;
        state.error = undefined;
        state.rows = [];
        state._inited = false;
      })
      .addCase(
        fetchProductsByCategory.fulfilled,
        (state: ProductsSchema, action: PayloadAction<ProductsSchema>) => {
          state.isLoading = false;
          state.rows = action.payload.rows;
          state.count = action.payload.count;
          state.metaData = action.payload.metaData;
          state._inited = true;
        },
      )
      .addCase(
        fetchProductsByCategory.rejected,
        (state: ProductsSchema, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.rows = [];
          state.error = action.payload;
          state._inited = false;
        },
      );
  },
});

export const { actions: ProductsByCategoryActions } = ProductsByCategorySlice;
export const { reducer: ProductsByCategoryReducer } = ProductsByCategorySlice;
