import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { IBrand } from '../types/IBrand';

export const getBrandSelector = (state: StateSchema) => {
  return state.brand?.brand ?? null;
};
