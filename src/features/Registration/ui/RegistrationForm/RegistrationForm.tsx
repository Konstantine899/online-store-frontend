import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import {
  RegistrationActions,
  RegistrationReducer,
} from '@/features/Registration/model/slices/RegistrationSlice';
import {
  getRegistrationEmail,
  getRegistrationError,
  getRegistrationIsLoading,
  getRegistrationPassword,
} from '../../model/selectors/getRegistrationState';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { registrationByEmail } from '../../model/services/registrationByEmail';
import { getEmailValidationErrors } from '@/shared/lib/helpers/getEmailValidationErrors';
import { getPasswordValidationErrors } from '@/shared/lib/helpers/getPasswordValidationErrors';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PasswordInput } from '@/features/PasswordInput';

const initialAsyncReducersRegistrationForm: ReducersList = {
  registrationForm: RegistrationReducer,
};

export interface RegistrationFormProps {
  className?: string;
  onClose?: () => void;
}

const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, onClose } = props;

  const dispatch = useAppDispatch();
  const email = useSelector(getRegistrationEmail);
  const password = useSelector(getRegistrationPassword);
  const isLoading = useSelector(getRegistrationIsLoading);
  const error = useSelector(getRegistrationError);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(RegistrationActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(RegistrationActions.setPassword(value));
    },
    [dispatch],
  );

  const onRegistrationClick = useCallback(async () => {
    const result = await dispatch(registrationByEmail({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onChangeEmail('');
      onChangePassword('');
      onClose?.();
    }
  }, [dispatch, email, onChangeEmail, onChangePassword, onClose, password]);

  const emailValidationErrors = getEmailValidationErrors(error);

  const passwordValidationErrors = getPasswordValidationErrors(error);

  return (
    <DynamicModuleLoader
      reducers={initialAsyncReducersRegistrationForm}
      removeAfterUnmount
    >
      <div className={classNames(cls.RegistrationForm, {}, [className])}>
        {typeof error === 'string' && (
          <label className={cls.label}>{error}</label>
        )}
        {emailValidationErrors}
        <Input
          type="text"
          className={cls.input}
          value={email}
          onChange={onChangeEmail}
          placeholder={'Email'}
        />

        {passwordValidationErrors}

        <PasswordInput
          password={password}
          onChangePassword={onChangePassword}
        />
        <Button
          className={cls.Btn}
          onClick={onRegistrationClick}
          disabled={isLoading}
        >
          Регистрация
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default RegistrationForm;
