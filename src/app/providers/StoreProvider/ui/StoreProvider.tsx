import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/app/providers/StoreProvider/config/store';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from 'redux';
import { useNavigate } from 'react-router-dom';

export interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  );

  return <Provider store={store}>{children}</Provider>;
};
