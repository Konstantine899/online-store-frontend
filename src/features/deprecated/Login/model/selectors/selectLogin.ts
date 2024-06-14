import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

/**
 * @deprecated
 */
export const selectSchemaLogin = (state: StateSchema) => state.loginForm;
/**
 * @deprecated
 */
export const selectLoginEmail = createSelector(
  selectSchemaLogin,
  (state) => state?.email ?? '',
);
/**
 * @deprecated
 */
export const selectLoginPassword = createSelector(
  selectSchemaLogin,
  (state) => state?.password ?? '',
);
/**
 * @deprecated
 */
export const selectLoginIsLoading = createSelector(
  selectSchemaLogin,
  (state) => state?.isLoading ?? false,
);
