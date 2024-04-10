import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { IBrand } from '../types/IBrand';
import { BRAND_ID } from '@/shared/consts/localstorage';

export const getBrandSelector = (state: StateSchema) => {
  return state.brand?.brand ?? null;
};

export const getBrandIdSelector = createSelector(
  getBrandSelector,
  (state: IBrand) => {
    return state?.id ?? JSON.parse(localStorage.getItem(BRAND_ID));
  },
);
