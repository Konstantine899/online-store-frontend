import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectProductsByCategoryState = (state: StateSchema) => {
  return state.productsByCategory;
};

export const selectProductsByCategorySort = createSelector(
  selectProductsByCategoryState,
  (state) => {
    return state?.sortOrder ?? 'asc';
  },
);

export const selectProductsByCategoryCurrentPage = createSelector(
  selectProductsByCategoryState,
  (state) => {
    return state?.metaData?.currentPage ?? 1;
  },
);

export const selectProductsByCategoryLastPage = createSelector(
  selectProductsByCategoryState,
  (state) => {
    return state?.metaData?.lastPage ?? 1;
  },
);

export const selectProductsByCategoryLimit = createSelector(
  selectProductsByCategoryState,
  (state) => {
    return state?.metaData?.limit ?? 5;
  },
);
