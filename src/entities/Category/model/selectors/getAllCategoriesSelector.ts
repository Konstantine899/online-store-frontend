import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

const getAllCategoriesStateSelector = (state: StateSchema) =>
  state.categoriesList;
export const getAllCategoriesSelector = createSelector(
  getAllCategoriesStateSelector,
  (state) => {
    return state?.categories ?? [];
  },
);
