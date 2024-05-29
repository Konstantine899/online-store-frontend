import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectProductsState = (state: StateSchema) => {
  return state.entityProduct?.products;
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
