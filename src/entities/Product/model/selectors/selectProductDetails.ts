import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchemaProductDetails = (state: StateSchema) => {
  return state.entityProduct?.productDetails;
};

export const selectProductDetailsIsLoading = createSelector(
  selectSchemaProductDetails,
  (state) => {
    return state?.isLoading || false;
  },
);

export const selectProductDetailsInited = createSelector(
  selectSchemaProductDetails,
  (state) => {
    return state?._inited || false;
  },
);

export const selectProductDetails = createSelector(
  selectSchemaProductDetails,
  (state) => {
    return state?.productDetails;
  },
);

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
