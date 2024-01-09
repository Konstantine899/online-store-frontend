import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getUserState = (state: StateSchema) => state.user;

export const getUserRole = createSelector(
  getUserState,
  (state) => state?.userData?.roles.filter((user) => user.role === 'USER'),
);

export const getAdminRole = createSelector(
  getUserState,
  (state) => state?.userData?.roles.filter((user) => user.role === 'ADMIN'),
);
