import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth, IAuthSchema } from '../types/IAuthSchema';
import { loginApi } from '../../api/loginApi';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { registrationApi } from '../../api/registrationApi';

const initialState: IAuthSchema = {
  auth: {
    type: '',
    accessToken: '',
    refreshToken: '',
  },
  email: '',
  password: '',
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setEmail: (state: IAuthSchema, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: IAuthSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAuthData: (state: IAuthSchema, action: PayloadAction<IAuth>) => {
      state.auth = action.payload;
    },
    initAuthData: (state: IAuthSchema) => {
      const type = JSON.parse(localStorage.getItem(TOKEN_TYPE_KEY) as string);
      const accessToken = JSON.parse(
        localStorage.getItem(ACCESS_TOKEN_KEY) as string,
      );
      const refreshToken = JSON.parse(
        localStorage.getItem(REFRESH_TOKEN_KEY) as string,
      );
      state.auth = { type, accessToken, refreshToken };
    },
    removeAuthData: (state) => {
      localStorage.removeItem(TOKEN_TYPE_KEY);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      state.auth.type = ``;
      state.auth.accessToken = ``;
      state.auth.refreshToken = ``;
      state.email = ``;
      state.password = ``;
    },
    removeValidationErrors: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.fetchLogin.matchRejected,
      (state, action: PayloadAction<FetchBaseQueryError | undefined>) => {
        state.error = action.payload;
      },
    );
    builder.addMatcher(
      registrationApi.endpoints.fetchRegistration.matchRejected,
      (state, action: PayloadAction<FetchBaseQueryError | undefined>) => {
        state.error = action.payload;
      },
    );
  },
});

export const { actions: AuthActions } = AuthSlice;
export const { reducer: AuthReducer } = AuthSlice;
