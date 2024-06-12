import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductsSchema } from '../types/IProductsSchema';
import { ISortOrder } from '@/shared/types/ISortOrder';

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

export const ProductsByCategorySlice = createSlice({
  name: 'ProductsByCategorySlice',
  initialState,
  reducers: {
    setPage: (state: IProductsSchema, action: PayloadAction<number>) => {
      state.metaData.currentPage = action.payload;
    },
    setLimit: (state: IProductsSchema, action: PayloadAction<number>) => {
      state.metaData.limit = action.payload;
    },
    setSortingOrder: (
      state: IProductsSchema,
      action: PayloadAction<ISortOrder>,
    ) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { actions: ProductsByCategoryActions } = ProductsByCategorySlice;
export const { reducer: ProductsByCategoryReducer } = ProductsByCategorySlice;
