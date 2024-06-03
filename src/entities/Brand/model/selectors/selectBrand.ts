import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchemaBrand = (state: StateSchema) => {
  return state.brand?.brand;
};

export const selectBrandId = createSelector(selectSchemaBrand, (state) => {
  return state?.id ?? 0;
});
