import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchemaCategory = (state: StateSchema) => {
  return state.entityCategory?.category;
};

export const selectCategory = createSelector(selectSchemaCategory, (state) => {
  return state?.category;
});

export const selectCategoryId = createSelector(
  selectSchemaCategory,
  (state) => {
    return (
      state?.category?.id ??
      JSON.parse(localStorage.getItem(`categoryId`) as string)
    );
  },
);
