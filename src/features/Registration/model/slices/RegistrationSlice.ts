import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationSchema } from '../types/RegistrationSchema';
import { registrationByEmail } from '../services/registrationByEmail';

const initialState: RegistrationSchema = {
  email: '',
  password: '',
  error: '',
  isLoading: false,
};

export const RegistrationSlice = createSlice({
  name: 'Registration',
  initialState,
  reducers: {
    setEmail: (state: RegistrationSchema, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: RegistrationSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetValidationErrors: (
      state: RegistrationSchema,
      action: PayloadAction<undefined>,
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(registrationByEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(registrationByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: RegistrationActions } = RegistrationSlice;
export const { reducer: RegistrationReducer } = RegistrationSlice;
