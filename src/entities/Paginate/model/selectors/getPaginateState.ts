import { createSelector } from '@reduxjs/toolkit';
import { ProductsSchema } from '@/pages/ProductsPage';
import { getProductsSelector } from '@/entities/Product';

export const getCurrentPage = createSelector(
  getProductsSelector,
  (state: ProductsSchema) => state?.metaData.currentPage ?? 1,
);

export const getLimit = createSelector(
  getProductsSelector,
  (state: ProductsSchema) => state?.metaData.limit ?? 1,
);

export const getNextPage = createSelector(
  getProductsSelector,
  (state: ProductsSchema) => state?.metaData.nextPage ?? 1,
);

export const getPreviosPage = createSelector(
  getProductsSelector,
  (state: ProductsSchema) => state?.metaData.previousPage ?? 1,
);

export const getLastPage = createSelector(
  getProductsSelector,
  (state: ProductsSchema) => state?.metaData.lastPage ?? 1,
);
