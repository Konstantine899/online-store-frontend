import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { ReducersMapObject } from 'redux';
import { UserReducer } from '@/entities/User';
import { AuthReducer } from '@/features/Auth';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';

export function createReduxStore(
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers, // обязательно разворачиваю asyncReducers до основных
    auth: AuthReducer,
    user: UserReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce, // передаем модифицированный store
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: { api: $api, navigate } },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
