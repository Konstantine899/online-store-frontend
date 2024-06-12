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

export const ProductsByCategoryAndBrandSlice = createSlice({
  name: 'ProductsByCategoryAndBrandSlice',
  initialState,
  reducers: {
    setPage: (state: ProductsSchema, action: PayloadAction<number>) => {
      state.metaData.currentPage = action.payload;
    },
    setLimit: (state: ProductsSchema, action: PayloadAction<number>) => {
      state.metaData.limit = action.payload;
    },
    setSortingOrder: (
      state: ProductsSchema,
      action: PayloadAction<ISortOrder>,
    ) => {
      state.sortingOrder = action.payload;
    },
  },
});

export const { actions: ProductsByCategoryAndBrandActions } =
  ProductsByCategoryAndBrandSlice;
export const { reducer: ProductsByCategoryAndBrandReducer } =
  ProductsByCategoryAndBrandSlice;
