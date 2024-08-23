import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthModalSchema } from '../types/IAuthModalSchema';

const initialState: IAuthModalSchema = {
  openRegistrationModal: false,
  openLoginModal: false,
};

export const AuthModalSlice = createSlice({
  name: 'AuthModal',
  initialState,
  reducers: {
    setOpenLoginModal: (
      state: IAuthModalSchema,
      action: PayloadAction<boolean>,
    ) => {
      state.openLoginModal = action.payload;
    },
    setOpenRegistrationModal: (
      state: IAuthModalSchema,
      action: PayloadAction<boolean>,
    ) => {
      state.openRegistrationModal = action.payload;
    },
  },
});

export const { actions: AuthModalActions } = AuthModalSlice;
export const { reducer: AuthModalReducer } = AuthModalSlice;
