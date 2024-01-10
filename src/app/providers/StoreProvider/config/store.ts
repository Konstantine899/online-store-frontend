import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { ReducersMapObject } from 'redux';
import { UserReducer } from '@/entities/User';
import { AuthReducer } from '@/features/Auth';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers, // обязательно разворачиваю asyncReducers до основных
    auth: AuthReducer,
    user: UserReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce, // передаем модифицированный store
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
