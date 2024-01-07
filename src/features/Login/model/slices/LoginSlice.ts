import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginByEmail } from '../services/loginByEmail';

const initialState: LoginSchema = {
  email: '',
  password: '',
  error: '',
  isLoading: false,
};

export const LoginSlice = createSlice({
  name: 'LoginSlice',
  initialState,
  reducers: {
    setEmail: (state: LoginSchema, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetValidationErrors: (
      state: LoginSchema,
      action: PayloadAction<undefined>,
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loginByEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: LoginActions } = LoginSlice;
export const { reducer: LoginReducer } = LoginSlice;
