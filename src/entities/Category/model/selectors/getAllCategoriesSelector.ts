import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { CategoriesSchema } from '../types/CategoriesSchema';

const getAllCategoriesStateSelector = (state: StateSchema) =>
  state.entityCategory?.categories;

export const getAllCategoriesIsLoadingSelector = createSelector(
  getAllCategoriesStateSelector,
  (state: CategoriesSchema | undefined) => {
    return state?.isLoading ?? false;
  },
);
export const getAllCategoriesSelector = createSelector(
  getAllCategoriesStateSelector,
  (state) => {
    return state?.categories ?? [];
  },
);
