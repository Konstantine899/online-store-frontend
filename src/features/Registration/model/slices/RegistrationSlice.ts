import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationSchema } from '../types/RegistrationSchema';
import { registrationByEmail } from '@/features/Registration/model/services/registrationByEmail';

const initialState: RegistrationSchema = {
  email: '',
  password: '',
  assessToken: '',
  refreshToken: '',
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(registrationByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.assessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
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
