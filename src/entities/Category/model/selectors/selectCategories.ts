import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { CategoriesSchema } from '../types/CategoriesSchema';

const selectSchemaCategories = (state: StateSchema) =>
  state.entityCategory?.categories;

export const selectCategoriesIsLoading = createSelector(
  selectSchemaCategories,
  (state: CategoriesSchema | undefined) => {
    return state?.isLoading ?? false;
  },
);
export const selectCategories = createSelector(
  selectSchemaCategories,
  (state) => {
    return state?.categories ?? [];
  },
);
