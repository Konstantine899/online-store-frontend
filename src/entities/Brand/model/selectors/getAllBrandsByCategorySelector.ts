import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getAllBrandsByCategoryStateSelector = (state: StateSchema) => {
  return state.allBrandsByCategory ?? null;
};

export const getAllBrandsByCategorySelector = createSelector(
  getAllBrandsByCategoryStateSelector,
  (state) => {
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
