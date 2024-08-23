import { FC, lazy, Suspense } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormLazy = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));

export const LoginFormAsync = (props: LoginFormProps) => (
  <Suspense fallback={''}>
    <LoginFormLazy {...props} />
  </Suspense>
);
