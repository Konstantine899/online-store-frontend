import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

const getAllBrandsState = (state: StateSchema) => {
  return state.allBrands;
};
export const getAllBrandsSelector = createSelector(
  getAllBrandsState,
  (state) => {
    return state?.brands || [];
  },
);
