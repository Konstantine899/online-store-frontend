import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchemaBrand = (state: StateSchema) => {
  return state.entityBrand?.brand;
};

export const selectBrandIsLoding = createSelector(
  selectSchemaBrand,
  (state) => {
    return state?.isLoading ?? false;
  },
);

export const selectBrandId = createSelector(selectSchemaBrand, (state) => {
  return state?.brand?.id ?? 0;
});
