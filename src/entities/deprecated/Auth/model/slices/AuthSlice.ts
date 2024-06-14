import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth, IAuthSchema } from '../types/IAuthSchema';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';

const initialState: IAuthSchema = {
  authData: {
    type: ``,
    refreshToken: ``,
    accessToken: ``,
  },
};
/**
 * @deprecated
 */
export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthData: (state: IAuthSchema, action: PayloadAction<IAuth>) => {
      state.authData.type = action.payload.type;
      state.authData.accessToken = action.payload.accessToken;
      state.authData.refreshToken = action.payload.refreshToken;
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
      state.authData.type = ``;
      state.authData.accessToken = ``;
      state.authData.refreshToken = ``;
    },
  },
});

export const { actions: AuthActions } = AuthSlice;
export const { reducer: AuthReducer } = AuthSlice;
