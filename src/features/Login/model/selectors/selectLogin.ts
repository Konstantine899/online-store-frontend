import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectSchemaLogin = (state: StateSchema) => state.loginForm;

export const selectLoginEmail = createSelector(
  selectSchemaLogin,
  (state) => state?.email ?? '',
);

export const selectLoginPassword = createSelector(
  selectSchemaLogin,
  (state) => state?.password ?? '',
);

export const selectLoginIsLoading = createSelector(
  selectSchemaLogin,
  (state) => state?.isLoading ?? false,
);

export const selectLoginError = createSelector(
  selectSchemaLogin,
  (state) => state?.error ?? '',
);
