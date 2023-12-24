import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationSchema } from '../types/RegistrationSchema';

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

export const { actions: RegistrationActions } = RegistrationSlice;
export const { reducer: RegistrationReducer } = RegistrationSlice;
