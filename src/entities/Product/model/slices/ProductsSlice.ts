import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsSchema, TSortOrder } from '../types/IProductsSchema';

const initialState: IProductsSchema = {
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
  sortOrder: 'asc',
};

export const ProductsSlice = createSlice({
  name: 'ProductsSlice',
  initialState,
  reducers: {
    setPage: (state: IProductsSchema, action: PayloadAction<number>) => {
      state.metaData.currentPage = action.payload;
    },
    setLimit: (state: IProductsSchema, action: PayloadAction<number>) => {
      state.metaData.limit = action.payload;
    },
    setSearch: (state: IProductsSchema, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSortingOrder: (
      state: IProductsSchema,
      action: PayloadAction<TSortOrder>,
    ) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { actions: ProductsActions } = ProductsSlice;
export const { reducer: ProductsReducer } = ProductsSlice;
