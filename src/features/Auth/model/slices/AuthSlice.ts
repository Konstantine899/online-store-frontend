import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';

const initialState: AuthSchema = {
  email: '',
  password: '',
  error: '',
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setEmail: (state: AuthSchema, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: AuthSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
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
