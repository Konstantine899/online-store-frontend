import { FC, ReactNode, useEffect } from 'react';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../hooks/useAppDispatch';

// Принимаемых reducers может быть множество
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

// типизирую кортеж
type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, removeAfterUnmount, reducers } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      // если reducer не вмонтирован, то добавляю его
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // зависимости не добавляю что бы не было лишних перерисовок
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
