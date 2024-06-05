import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectProductsState = (state: StateSchema) => {
  return state.productsPage?.products;
};

export const selectProducts = createSelector(
  selectProductsState,
  (state) => state?.rows ?? [],
);

export const selectProductsIsLoading = createSelector(
  selectProductsState,
  (state) => {
    return state?.isLoading ?? false;
  },
);

export const selectProductsInited = createSelector(
  selectProductsState,
  (state) => {
    return state?._inited ?? false;
  },
);

export const selectSearch = createSelector(selectProductsState, (state) => {
  return state?.search ?? '';
});
export const selectSortOrder = createSelector(selectProductsState, (state) => {
  return state?.sortingOrder ?? 'asc';
});

export const selectCount = createSelector(selectProductsState, (state) => {
  return state?.count ?? 0;
});

// MetaData

export const selectMetaData = (state: StateSchema) => {
  return state?.productsPage?.products?.metaData;
};
export const selectLimit = createSelector(selectMetaData, (state) => {
  return state?.limit ?? 5;
});
export const selectCurrentPage = createSelector(selectMetaData, (state) => {
  return state?.currentPage ?? 1;
});
export const selectNextPage = createSelector(selectMetaData, (state) => {
  return state?.nextPage ?? 0;
});
export const selectPreviosPage = createSelector(selectMetaData, (state) => {
  return state?.previousPage ?? 0;
});
export const selectLastPage = createSelector(selectMetaData, (state) => {
  return state?.lastPage ?? 0;
});
