import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import {
  AuthValidateProperty,
  IAuthSchema,
  IAuthValidate,
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

export const selectValidate = createSelector(
  selectAuth,
  (state: IAuthSchema) => {
    return state?.error?.data as IAuthValidate[];
  },
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: IAuthSchema) => {
    return state.error?.data as { status: number; message: string };
  },
);

export const selectValidateEmail = createSelector(
  selectValidate,
  (errors: IAuthValidate[]) => {
    let messages: string[] = [];
    if (!Array.isArray(errors)) return;
    errors.forEach((value: IAuthValidate) => {
      if (value.property === AuthValidateProperty.EMAIL) {
        messages = value.messages;
      }
    });
    return messages;
  },
);

export const selectValidatePassword = createSelector(
  selectValidate,
  (errors: IAuthValidate[]) => {
    let messages: string[] = [];
    if (!Array.isArray(errors)) return;
    errors.forEach((value: IAuthValidate) => {
      if (value.property === AuthValidateProperty.PASSWORD) {
        messages = value.messages;
      }
    });
    return messages;
  },
);
