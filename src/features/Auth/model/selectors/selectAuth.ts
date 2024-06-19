import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import {
  AuthErrorProperty,
  IAuthErrorData,
  IAuthSchema,
} from '../types/IAuthSchema';

export const selectAuth = (state: StateSchema) => state.auth;

export const selectEmail = createSelector(
  selectAuth,
  (state: IAuthSchema | undefined) => {
    return state?.email ?? '';
  },
);

export const selectPassword = createSelector(
  selectAuth,
  (state: IAuthSchema | undefined) => {
    return state?.password ?? '';
  },
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: IAuthSchema | undefined) => {
    return (state?.error?.data as IAuthErrorData[]) ?? [];
  },
);

export const selectEmailErrors = createSelector(
  selectAuthError,
  (errors: IAuthErrorData[]) => {
    let messages: string[] = [];
    errors.forEach((value: IAuthErrorData) => {
      if (value.property === AuthErrorProperty.EMAIL) {
        messages = value.messages;
      }
    });
    return messages;
  },
);

export const selectPasswordValidationErrors = createSelector(
  selectAuthError,
  (errors: IAuthErrorData[]) => {
    let messages: string[] = [];
    errors.forEach((value: IAuthErrorData) => {
      if (value.property === AuthErrorProperty.PASSWORD) {
        messages = value.messages;
      }
    });
    return messages;
  },
);
