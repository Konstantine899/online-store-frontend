import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchemaUser = (state: StateSchema) => {
  return state.user;
};

export const selectUser = createSelector(selectSchemaUser, (state) => {
  return state?.userData;
});

export const selectUserRole = createSelector(
  selectUser,
  (state) => state?.roles.filter((user) => user.role === 'USER'),
);

export const selectAdminRole = createSelector(
  selectUser,
  (state) => state?.roles.filter((user) => user.role === 'ADMIN'),
);
