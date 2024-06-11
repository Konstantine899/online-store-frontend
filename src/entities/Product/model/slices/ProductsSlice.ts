import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/ProductsSchema';
import { ISortOrder } from '@/shared/types/ISortOrder';

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
    setSortingOrder: (
      state: ProductsSchema,
      action: PayloadAction<ISortOrder>,
    ) => {
      state.sortingOrder = action.payload;
    },
  },
});

export const { actions: ProductsActions } = ProductsSlice;
export const { reducer: ProductsReducer } = ProductsSlice;
