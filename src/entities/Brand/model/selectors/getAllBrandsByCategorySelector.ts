import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { AllBrandsByCategorySchema } from '../types/AllBrandsByCategorySchema';

export const getAllBrandsByCategoryStateSelector = (state: StateSchema) => {
  return state.entityBrand?.allBrandsByCategory;
};

export const getAllBrandsByCategorySelector = createSelector(
  getAllBrandsByCategoryStateSelector,
  (state: AllBrandsByCategorySchema | undefined) => {
    return state?.brands ?? [];
  },
);

export const getAllBrandsByCategoryIsLoadingSelector = createSelector(
  getAllBrandsByCategoryStateSelector,
  (state) => {
    return state?.isLoading ?? false;
  },
);

export const getAllBrandsByCategoryErrorSelector = createSelector(
  getAllBrandsByCategoryStateSelector,
  (state) => {
    return state?.error ?? '';
  },
);
