import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/ProductsSchema';
import { FetchProductsByBrand } from '../../model/services/FetchProductsByBrand';
import { FetchProductsByCategory } from '../../model/services/FetchProductsByCategory';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { fetchProducts } from '../services/fetchProducts';
import { FetchProductsByBrandAndCategory } from '../../model/services/FetchProductsByBrandAndCategory';

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
  reducers: {
    setPage: (state: ProductsSchema, action: PayloadAction<number>) => {
      state.metaData.currentPage = action.payload;
    },
    setLimit: (state: ProductsSchema, action: PayloadAction<number>) => {
      state.metaData.limit = action.payload;
    },
    setSearch: (state: ProductsSchema, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.search = action.payload;
    },

    setSortingOrder: (
      state: ProductsSchema,
      action: PayloadAction<ISortOrder>,
    ) => {
      state.sortingOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductsSchema) => {
        state.isLoading = true;
        state.error = '';
        state.rows = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.rows = action.payload.rows;
        state.count = action.payload.count;
        state.metaData = action.payload.metaData;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.rows = null;
      })
      .addCase(FetchProductsByBrand.pending, (state: ProductsSchema) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        FetchProductsByBrand.fulfilled,
        (state: ProductsSchema, action: PayloadAction<ProductsSchema>) => {
          state.isLoading = false;
          state.error = '';
          state.rows = action.payload.rows;
          state.count = action.payload.count;
          state.metaData = action.payload.metaData;
        },
      )
      .addCase(
        FetchProductsByBrand.rejected,
        (state: ProductsSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )
      .addCase(FetchProductsByCategory.pending, (state: ProductsSchema) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        FetchProductsByCategory.fulfilled,
        (state: ProductsSchema, action: PayloadAction<ProductsSchema>) => {
          state.isLoading = false;
          state.error = '';
          state.rows = action.payload.rows;
          state.count = action.payload.count;
          state.metaData = action.payload.metaData;
        },
      )
      .addCase(
        FetchProductsByCategory.rejected,
        (state: ProductsSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )
      .addCase(
        FetchProductsByBrandAndCategory.pending,
        (state: ProductsSchema) => {
          state.isLoading = true;
          state.error = '';
        },
      )
      .addCase(
        FetchProductsByBrandAndCategory.fulfilled,
        (state: ProductsSchema, action: PayloadAction<ProductsSchema>) => {
          state.isLoading = false;
          state.error = '';
          state.rows = action.payload.rows;
          state.count = action.payload.count;
          state.metaData = action.payload.metaData;
        },
      )
      .addCase(
        FetchProductsByBrandAndCategory.rejected,
        (state: ProductsSchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: ProductsPageActions } = ProductsSlice;
export const { reducer: ProductsPageReducer } = ProductsSlice;
