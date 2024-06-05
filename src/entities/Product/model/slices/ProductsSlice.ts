import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsSchema } from '../types/ProductsSchema';
import { fetchProductsByBrand } from '../services/fetchProductsByBrand';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { fetchProducts } from '../services/fetchProducts';
import { FetchProductsByBrandAndCategory } from '../../model/services/FetchProductsByBrandAndCategory';

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
      state.search = action.payload;
    },
    setProductsListIsLoading: (
      state: ProductsSchema,
      action: PayloadAction<boolean>,
    ) => {
      state.isLoading = action.payload;
    },

    setRows: (state: ProductsSchema, action: PayloadAction<Product[]>) => {
      state.rows = action.payload;
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
        state.rows = [];
        state.error = undefined;
        state._inited = false;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductsSchema, action: PayloadAction<ProductsSchema>) => {
          state.isLoading = false;
          state.rows = action.payload.rows;
          state.count = action.payload.count;
          state.metaData = action.payload.metaData;
          state._inited = true;
        },
      )
      .addCase(
        fetchProducts.rejected,
        (state: ProductsSchema, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.rows = [];
          state.error = action.payload;
          state._inited = false;
        },
      )
      .addCase(fetchProductsByBrand.pending, (state: ProductsSchema) => {
        state.isLoading = true;
        state.error = undefined;
        state.rows = [];
        state._inited = false;
      })
      .addCase(
        fetchProductsByBrand.fulfilled,
        (state: ProductsSchema, action: PayloadAction<ProductsSchema>) => {
          state.isLoading = false;
          state.rows = action.payload.rows;
          state.count = action.payload.count;
          state.metaData = action.payload.metaData;
          state._inited = true;
        },
      )
      .addCase(
        fetchProductsByBrand.rejected,
        (state: ProductsSchema, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.rows = [];
          state.error = action.payload;
          state._inited = false;
        },
      )

      .addCase(
        FetchProductsByBrandAndCategory.pending,
        (state: ProductsSchema) => {
          state.isLoading = true;
          state.error = undefined;
          state.rows = [];
          state._inited = false;
        },
      )
      .addCase(
        FetchProductsByBrandAndCategory.fulfilled,
        (state: ProductsSchema, action: PayloadAction<ProductsSchema>) => {
          state.isLoading = false;
          state.rows = action.payload.rows;
          state.count = action.payload.count;
          state.metaData = action.payload.metaData;
          state._inited = true;
        },
      )
      .addCase(
        FetchProductsByBrandAndCategory.rejected,
        (state: ProductsSchema, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.rows = [];
          state.error = action.payload;
          state._inited = false;
        },
      );
  },
});

export const { actions: ProductsActions } = ProductsSlice;
export const { reducer: ProductsReducer } = ProductsSlice;
