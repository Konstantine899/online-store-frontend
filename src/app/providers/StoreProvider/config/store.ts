import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from 'redux';
import { UserReducer } from '@/entities/User';

export function createReduxStore(initialState: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: UserReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
