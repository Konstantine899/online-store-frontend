import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth, User, UserSchema } from '../types/UserSchema';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { jwtDecode } from 'jwt-decode';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<Auth>) => {
      state.authData = action.payload;
    },
    setUserData: (state: UserSchema, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    initAuthData: (state) => {
      const type = JSON.parse(localStorage.getItem(TOKEN_TYPE_KEY));
      const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY));
      const refreshToken = JSON.parse(localStorage.getItem(REFRESH_TOKEN_KEY));

      state.authData = { type, accessToken, refreshToken };
      if (accessToken) {
        state.userData = jwtDecode<User>(accessToken);
      }
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

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
