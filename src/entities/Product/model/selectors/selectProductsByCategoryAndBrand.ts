import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectProductsByCategoryAndBrandState = (state: StateSchema) => {
  return state.productsByCategoryAndBrandPage?.productsByCategoryAndBrandPage;
};

export const selectProductsByCategoryAndBrand = createSelector(
  selectProductsByCategoryAndBrandState,
  (state) => {
    return state?.rows || [];
  },
);

export const selectProductsByCategoryAndBrandCount = createSelector(
  selectProductsByCategoryAndBrandState,
  (state) => {
    return state?.count ?? 0;
  },
);

export const selectProductsByCategoryAndBrandSort = createSelector(
  selectProductsByCategoryAndBrandState,
  (state) => {
    return state?.sortOrder || 'asc';
  },
);

export const selectProductsByCategoryAndBrandCurrentPage = createSelector(
  selectProductsByCategoryAndBrandState,
  (state) => {
    return state?.metaData?.currentPage ?? 1;
  },
);

export const selectProductsByCategoryAndBrandLastPage = createSelector(
  selectProductsByCategoryAndBrandState,
  (state) => {
    return state?.metaData?.lastPage ?? 1;
  },
);

export const selectProductsByCategoryAndBrandLimit = createSelector(
  selectProductsByCategoryAndBrandState,
  (state) => {
    return state?.metaData?.limit ?? 5;
  },
);
