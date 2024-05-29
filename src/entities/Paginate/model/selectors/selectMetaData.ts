import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectMetaData = (state: StateSchema) => {
  return state.entityProduct?.products?.metaData;
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
