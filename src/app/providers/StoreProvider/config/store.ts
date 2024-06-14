import { CombinedState, configureStore, Reducer } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { ReducersMapObject } from 'redux';
import { UserReducer } from '@/entities/User';
import { AuthReducer } from '@/entities/deprecated/Auth';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { ScrollReducer } from '@/features/Scroll';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers, // обязательно разворачиваю asyncReducers до основных
    auth: AuthReducer,
    user: UserReducer,
    scroll: ScrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>, // передаем модифицированный store
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: { api: $api } },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
