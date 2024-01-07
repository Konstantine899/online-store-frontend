import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { User, UserActions } from '@/entities/User';
import { GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { LoginValidationErrors } from '@/features/Login';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const setUserData = (
  data: User,
  thunkAPI: GetThunkAPI<{
    rejectValue: string | LoginValidationErrors[];
    state?: unknown;
    dispatch?: Dispatch<AnyAction>;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }>,
) => {
  if (!data) {
    throw new Error();
  }

  localStorage.setItem(TOKEN_TYPE_KEY, JSON.stringify(data.type));
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(data.accessToken));
  localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(data.refreshToken));

  // Полученные данные о пользователе сохраняю в state
  thunkAPI.dispatch(UserActions.setAuthData(data));
  return data;
};
