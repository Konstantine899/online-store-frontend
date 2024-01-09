import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/UserSchema';
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localstorage';
import { jwtDecode } from 'jwt-decode';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserData: (state: UserSchema, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    initUserData: (state) => {
      const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY));

      if (accessToken) {
        state.userData = jwtDecode<User>(accessToken);
      }
    },
    removeUserData: (state) => {
      state.userData = null;
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
