import { FC, lazy, Suspense } from 'react';
import { LoginFormProps } from './LoginForm';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { LoginReducer } from '../../model/slices/LoginSlice';

const reducers: ReducersList = {
  loginForm: LoginReducer,
};

const LoginFormLazy = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));

export const LoginFormAsync = (props: LoginFormProps) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <LoginFormLazy {...props} />
    </DynamicModuleLoader>
  </Suspense>
);
