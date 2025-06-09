import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ManageCategoriesSchema } from '../types/ManageCategoriesSchema';

const selectCategoryModal = (state: StateSchema) => state.createCategoryModal;

export const selectCreateCategoryModal = createSelector(
  selectCategoryModal,
  (state: ManageCategoriesSchema) => state.openCreateCategoryModal,
);
