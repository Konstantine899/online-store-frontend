import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getUserState = (state: StateSchema) => state?.user?.userData;

export const getUserRole = createSelector(
  getUserState,
  (state) => state?.roles.filter((user) => user.role === 'USER'),
);

export const getAdminRole = createSelector(
  getUserState,
  (state) => state?.roles.filter((user) => user.role === 'ADMIN'),
);
