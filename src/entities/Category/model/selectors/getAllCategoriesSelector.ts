import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { AllCategoriesSchema } from '../types/AllCategoriesSchema';

const getAllCategoriesStateSelector = (state: StateSchema) =>
  state.categoriesList;

export const getAllCategoriesIsLoadingSelector = createSelector(
  getAllCategoriesStateSelector,
  (state: AllCategoriesSchema) => {
    return state?.isLoading ?? false;
  },
);
export const getAllCategoriesSelector = createSelector(
  getAllCategoriesStateSelector,
  (state) => {
    return state?.categories ?? [];
  },
);
