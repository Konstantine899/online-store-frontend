import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth, IAuthSchema } from '../types/IAuthSchema';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';

const initialState: IAuthSchema = {};

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthData: (state: IAuthSchema, action: PayloadAction<IAuth>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const type = JSON.parse(localStorage.getItem(TOKEN_TYPE_KEY) as string);
      const accessToken = JSON.parse(
        localStorage.getItem(ACCESS_TOKEN_KEY) as string,
      );
      const refreshToken = JSON.parse(
        localStorage.getItem(REFRESH_TOKEN_KEY) as string,
      );

      state.authData = { type, accessToken, refreshToken };
    },
    removeAuthData: (state) => {
      localStorage.removeItem(TOKEN_TYPE_KEY);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      state.authData = undefined;
    },
  },
});

export const { actions: AuthActions } = AuthSlice;
export const { reducer: AuthReducer } = AuthSlice;
