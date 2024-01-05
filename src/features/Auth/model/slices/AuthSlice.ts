import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/AuthSchema';
import { authByEmail } from '@/features/Auth/model/services/authByEmail';

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
    resetValidationErrors: (
      state: AuthSchema,
      action: PayloadAction<undefined>,
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(authByEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(authByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: AuthActions } = AuthSlice;
export const { reducer: AuthReducer } = AuthSlice;
