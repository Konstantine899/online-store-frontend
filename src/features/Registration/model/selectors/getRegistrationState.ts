import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getRegistrationState = (state: StateSchema) =>
  state?.registrationForm;

export const getRegistrationEmail = (state: StateSchema) =>
  state?.registrationForm?.email ?? '';

export const getRegistrationPassword = (state: StateSchema) =>
  state?.registrationForm?.password ?? '';

export const getRegistrationIsLoading = (state: StateSchema) =>
  state?.registrationForm?.isLoading ?? false;
export const getRegistrationError = (state: StateSchema) =>
  state?.registrationForm?.error ?? '';
