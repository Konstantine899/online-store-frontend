import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ICategory } from '../types/ICategory';

export const getCategoryStateSelector = (state: StateSchema) => {
  return state.entityCategory?.category?.category;
};

export const getCategoryIdSelector = createSelector(
  getCategoryStateSelector,
  (state: ICategory | undefined) => {
    return (
      state?.id ?? JSON.parse(localStorage.getItem(`categoryId`) as string)
    );
  },
);

export const getCategoryNameSelector = createSelector(
  getCategoryStateSelector,
  (state: ICategory | undefined) => {
    return state?.name ?? '';
  },
);
