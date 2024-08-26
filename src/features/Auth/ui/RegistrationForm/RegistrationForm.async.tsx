import { FC, lazy, Suspense } from 'react';
import { RegistrationFormProps } from './RegistrationForm';

const RegistrationFormLazy = lazy<FC<RegistrationFormProps>>(
  () => import('./RegistrationForm'),
);

export const RegistrationFormAsync = (props: RegistrationFormProps) => (
  <Suspense fallback={''}>
    <RegistrationFormLazy {...props} />
  </Suspense>
);
