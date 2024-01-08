import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from 'redux';
import { UserReducer } from '@/entities/User';
import { RegistrationReducer } from '@/features/Registration/model/slices/RegistrationSlice';
import { LoginReducer } from '@/features/Login';
import { AuthReducer } from '@/features/Auth';

export function createReduxStore(initialState: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    auth: AuthReducer,
    user: UserReducer,
    registrationForm: RegistrationReducer,
    loginForm: LoginReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
