import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { AllBrandsByCategorySchema } from '../types/AllBrandsByCategorySchema';

export const selectSchemaBrandsByCategory = (state: StateSchema) => {
  return state.entityBrand?.allBrandsByCategory;
};

export const selectBrandsByCategory = createSelector(
  selectSchemaBrandsByCategory,
  (state: AllBrandsByCategorySchema | undefined) => {
    return state?.brands ?? [];
  },
);

export const selectBrandsByCategoryIsLoading = createSelector(
  selectSchemaBrandsByCategory,
  (state) => {
    return state?.isLoading ?? false;
  },
);
