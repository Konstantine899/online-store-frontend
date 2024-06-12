import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectProductDetails = (state: StateSchema) => {
  return state.productPage?.product;
};

export const selectPrice = createSelector(selectProductDetails, (state) => {
  return state?.price ?? 0;
});

export const selectProperties = createSelector(
  selectProductDetails,
  (state) => {
    return state?.properties ?? [];
  },
);

export const selectProductName = createSelector(
  selectProductDetails,
  (state) => {
    return state?.name ?? '';
  },
);

export const selectProductImage = createSelector(
  selectProductDetails,
  (state) => {
    return state?.image ?? '';
  },
);
