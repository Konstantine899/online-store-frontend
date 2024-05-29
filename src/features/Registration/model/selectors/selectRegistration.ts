import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const selectRegistration = (state: StateSchema) =>
  state?.registrationForm;

export const selectRegistrationEmail = createSelector(
  selectRegistration,
  (state) => state?.email ?? '',
);

export const selectRegistrationPassword = createSelector(
  selectRegistration,
  (state) => state?.password ?? '',
);

export const selectRegistrationIsLoading = createSelector(
  selectRegistration,
  (state) => state?.isLoading ?? false,
);
export const selectRegistrationError = createSelector(
  selectRegistration,
  (state) => state?.error ?? '',
);
