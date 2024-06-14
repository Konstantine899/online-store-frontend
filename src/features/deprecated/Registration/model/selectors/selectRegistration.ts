import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

/**
 * @deprecated
 */
export const selectRegistration = (state: StateSchema) =>
  state?.registrationForm;

/**
 * @deprecated
 */
export const selectRegistrationEmail = createSelector(
  selectRegistration,
  (state) => state?.email ?? '',
);

/**
 * @deprecated
 */
export const selectRegistrationPassword = createSelector(
  selectRegistration,
  (state) => state?.password ?? '',
);

/**
 * @deprecated
 */
export const selectRegistrationIsLoading = createSelector(
  selectRegistration,
  (state) => state?.isLoading ?? false,
);

/**
 * @deprecated
 */
export const selectRegistrationError = createSelector(
  selectRegistration,
  (state) => state?.error ?? '',
);
