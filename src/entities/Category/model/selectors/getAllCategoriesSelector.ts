import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

const getAllCategoriesState = (state: StateSchema) => state.categoriesList;
export const getAllCategoriesSelector = createSelector(
  getAllCategoriesState,
  (state) => {
    return state?.categories ?? [];
  },
);

export const getCategoryIdSelector = (state: StateSchema) =>
  state.category?.category?.id ?? 0;
