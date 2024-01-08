import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth, AuthSchema } from '../types/AuthSchema';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';

const initialState: AuthSchema = {};

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthData: (state: AuthSchema, action: PayloadAction<Auth>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const type = JSON.parse(localStorage.getItem(TOKEN_TYPE_KEY));
      const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY));
      const refreshToken = JSON.parse(localStorage.getItem(REFRESH_TOKEN_KEY));

      state.authData = { type, accessToken, refreshToken };
    },
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: AuthActions } = AuthSlice;
export const { reducer: AuthReducer } = AuthSlice;
