import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { IAuthModalSchema } from '../types/IAuthModalSchema';

const selectModalAuth = (state: StateSchema) => state.authModal;

export const selectLoginModal = createSelector(
  selectModalAuth,
  (state: IAuthModalSchema) => state.openLoginModal,
);
export const selectRegistrationModal = createSelector(
  selectModalAuth,
  (state: IAuthModalSchema) => state.openRegistrationModal,
);
