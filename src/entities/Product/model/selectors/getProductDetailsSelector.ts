import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { IProductDetails } from '../types/IProductDetails';
import { createSelector } from '@reduxjs/toolkit';

export const getProductDetailsSelector = (state: StateSchema) => {
  return state.productDetailsPage?.productDetails ?? null;
};

export const getProductDetailsPriceSelector = createSelector(
  getProductDetailsSelector,
  (state: IProductDetails) => {
    return state?.price ?? 0;
  },
);

export const getProductDetailsPropertiesSelector = createSelector(
  getProductDetailsSelector,
  (state: IProductDetails) => {
    return state?.properties ?? [];
  },
);
export const getProductDetailsIsLoadingSelector = (state: StateSchema) => {
  return state.productDetailsPage?.isLoading ?? false;
};
export const getProductDetailsErrorSelector = (state: StateSchema) => {
  return state.productDetailsPage?.error ?? '';
};

export const getProductDetailsInitedSelector = (state: StateSchema) => {
  return state.productDetailsPage?._inited ?? false;
};
