import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectCategory = (state: StateSchema) => {
  return state?.category?.category;
};

export const selectCategoryId = createSelector(selectCategory, (state) => {
  return state?.id ?? 0;
});
