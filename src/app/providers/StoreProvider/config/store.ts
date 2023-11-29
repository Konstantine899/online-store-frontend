import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export function createReduxStore(initialState: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
