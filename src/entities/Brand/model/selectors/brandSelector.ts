import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { IBrand } from '../types/IBrand';

export const brandStateSelector = (state: StateSchema) => {
  return state.brand?.brand ?? null;
};
export const brandIdSelector = createSelector(
  brandStateSelector,
  (state: IBrand) => {
    return state?.id ?? 0;
  },
);
