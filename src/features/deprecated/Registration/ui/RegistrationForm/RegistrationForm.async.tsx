import { FC, lazy, Suspense } from 'react';
import { RegistrationFormProps } from './RegistrationForm';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { RegistrationReducer } from '@/features/deprecated/Registration/model/slices/RegistrationSlice';

const reducers: ReducersList = {
  registrationForm: RegistrationReducer,
};

export const RegistrationFormLazy = lazy<FC<RegistrationFormProps>>(
  () => import('./RegistrationForm'),
);

export const RegistrationFormAsync = (props: RegistrationFormProps) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <RegistrationFormLazy {...props} />
    </DynamicModuleLoader>
  </Suspense>
);
