import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectProductsState = (state: StateSchema) => {
  return state.productsPage?.products;
};

export const selectProducts = createSelector(
  selectProductsState,
  (state) => state?.rows ?? [],
);

export const selectProductsSearch = createSelector(
  selectProductsState,
  (state) => {
    return state?.search ?? '';
  },
);
export const selectProductsSortOrder = createSelector(
  selectProductsState,
  (state) => {
    return state?.sortOrder ?? 'asc';
  },
);

export const selectProductsCount = createSelector(
  selectProductsState,
  (state) => {
    return state?.count ?? 0;
  },
);

// MetaData

export const selectProductsMetaData = (state: StateSchema) => {
  return state?.productsPage?.products?.metaData;
};
export const selectProductsLimit = createSelector(
  selectProductsMetaData,
  (state) => {
    return state?.limit ?? 5;
  },
);
export const selectProductsCurrentPage = createSelector(
  selectProductsMetaData,
  (state) => {
    return state?.currentPage ?? 1;
  },
);
export const selectProductsNextPage = createSelector(
  selectProductsMetaData,
  (state) => {
    return state?.nextPage ?? 0;
  },
);
export const selectProductsPreviosPage = createSelector(
  selectProductsMetaData,
  (state) => {
    return state?.previousPage ?? 0;
  },
);
export const selectProductsLastPage = createSelector(
  selectProductsMetaData,
  (state) => {
    return state?.lastPage ?? 0;
  },
);
