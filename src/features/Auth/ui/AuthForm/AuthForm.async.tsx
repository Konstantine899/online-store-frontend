import { FC, lazy, Suspense } from 'react';
import { IAuthFormProps } from './AuthForm';

const AuthFormLazy = lazy<FC<IAuthFormProps>>(() => import('./AuthForm'));

export const AuthFormAsync = (props: IAuthFormProps) => (
  <Suspense fallback={''}>
    <AuthFormLazy {...props} />
  </Suspense>
);
