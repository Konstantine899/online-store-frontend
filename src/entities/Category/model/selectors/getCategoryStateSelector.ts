import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ICategory } from '../types/ICategory';

export const getCategoryStateSelector = (state: StateSchema) => {
  return state.category?.category ?? null;
};

export const getCategoryIdSelector = createSelector(
  getCategoryStateSelector,
  (state: ICategory) => {
    return state?.id ?? 0;
  },
);
