import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchemaPopularCategories = (state: StateSchema) =>
  state.entityCategory?.categoriesPopular;

export const selectPopularCategoriesIsLoading = createSelector(
  selectSchemaPopularCategories,
  (state) => {
    return state?.isLoading || false;
  },
);

export const selectPopularCategories = createSelector(
  selectSchemaPopularCategories,
  (state) => {
    return state?.categories || [];
  },
);
