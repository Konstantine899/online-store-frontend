import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

const selectSchemaBrands = (state: StateSchema) => {
  return state.entityBrand?.allBrands;
};
export const selectBrands = createSelector(selectSchemaBrands, (state) => {
  return state?.brands || [];
});
