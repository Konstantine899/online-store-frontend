import { createSelector } from '@reduxjs/toolkit';
import { ProductsPageSchema } from '@/pages/ProductsPage';
import { getProductsListPageState } from '@/pages/ProductsPage/model/selectors/getProductsListPageState';

export const getCurrentPage = createSelector(
  getProductsListPageState,
  (state: ProductsPageSchema) => state?.metaData.currentPage ?? 1,
);

export const getLimit = createSelector(
  getProductsListPageState,
  (state: ProductsPageSchema) => state?.metaData.limit ?? 1,
);

export const getNextPage = createSelector(
  getProductsListPageState,
  (state: ProductsPageSchema) => state?.metaData.nextPage ?? 1,
);

export const getPreviosPage = createSelector(
  getProductsListPageState,
  (state: ProductsPageSchema) => state?.metaData.previousPage ?? 1,
);

export const getLastPage = createSelector(
  getProductsListPageState,
  (state: ProductsPageSchema) => state?.metaData.lastPage ?? 1,
);
