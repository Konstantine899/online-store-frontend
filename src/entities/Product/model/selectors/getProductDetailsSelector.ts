import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { IProductDetails } from '../types/IProductDetails';
import { createSelector } from '@reduxjs/toolkit';

export const getProductDetailsSelector = (state: StateSchema) => {
  return state.entityProduct?.productDetails?.productDetails;
};

export const getProductDetailsPriceSelector = createSelector(
  getProductDetailsSelector,
  (state: IProductDetails | undefined) => {
    return state?.price ?? 0;
  },
);

export const getProductDetailsPropertiesSelector = createSelector(
  getProductDetailsSelector,
  (state: IProductDetails | undefined) => {
    return state?.properties ?? [];
  },
);

export const getProductDetailsNameSelector = createSelector(
  getProductDetailsSelector,
  (state: IProductDetails | undefined) => {
    return state?.name ?? '';
  },
);
export const getProductDetailsIsLoadingSelector = (state: StateSchema) => {
  return state.entityProduct?.productDetails?.isLoading ?? false;
};

export const getProductDetailsInitedSelector = (state: StateSchema) => {
  return state.entityProduct?.productDetails?._inited ?? false;
};
