import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserSchema } from '../types/IUserSchema';
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localstorage';
import { jwtDecode } from 'jwt-decode';

const initialState: IUserSchema = {};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserData: (state: IUserSchema, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
    initUserData: (state) => {
      const accessToken = JSON.parse(
        localStorage.getItem(ACCESS_TOKEN_KEY) as string,
      );

      if (accessToken) {
        state.userData = jwtDecode<IUser>(accessToken);
      }
    },
    removeUserData: (state) => {
      state.userData = undefined;
    },
  },
});

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
