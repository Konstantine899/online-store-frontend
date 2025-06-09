import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ManageCategoriesSchema } from '../types/ManageCategoriesSchema';

const initialState: ManageCategoriesSchema = {
  openCreateCategoryModal: false,
  openUpdateCategoryModal: false,
  openRemoveCategoryModal: false,
};

export const ManageCategoriesSlice = createSlice({
  name: 'ManageCategories',
  initialState,
  reducers: {
    setOpenCreateCategoryModal: (
      state: ManageCategoriesSchema,
      action: PayloadAction<boolean>,
    ) => {
      state.openCreateCategoryModal = action.payload;
    },
    setOpenUpdateCategoryModal: (
      state: ManageCategoriesSchema,
      action: PayloadAction<boolean>,
    ) => {
      state.openUpdateCategoryModal = action.payload;
    },
    setOpenRemoveCategoryModal: (
      state: ManageCategoriesSchema,
      action: PayloadAction<boolean>,
    ) => {
      state.openRemoveCategoryModal = action.payload;
    },
  },
});

export const { actions: ManageCategoriesActions } = ManageCategoriesSlice;
export const { reducer: ManageCategoriesReducer } = ManageCategoriesSlice;
