import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { IAuthSchema } from '../types/IAuthSchema';

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
    return state?.error?.data ?? [];
  },
);
