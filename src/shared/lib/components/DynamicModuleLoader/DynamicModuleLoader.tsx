import { FC, ReactNode, useEffect } from 'react';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';

// Принимаемых reducers может быть множество
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

// типизирую кортеж
type ReducerListEntry = [StateSchemaKey, Reducer];

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
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `MOUNTING ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]: ReducerListEntry) => {
            store.reducerManager.remove(name);
            dispatch({ type: `UNMOUNTING ${name} reducer` });
          },
        );
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return <>{children}</>;
};
