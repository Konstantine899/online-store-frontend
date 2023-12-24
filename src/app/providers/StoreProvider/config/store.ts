import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from 'redux';
import { UserReducer } from '@/entities/User';
import { RegistrationReducer } from '@/features/Registration/model/slices/RegistrationSlice';
import { AuthReducer } from '@/features/Auth/model/slices/AuthSlice';

export function createReduxStore(initialState: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: UserReducer,
    registrationForm: RegistrationReducer,
    loginForm: AuthReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
