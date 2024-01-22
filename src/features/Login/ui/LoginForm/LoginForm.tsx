import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { LoginActions, loginByEmail } from '@/features/Login';
import { getEmailValidationErrors } from '@/shared/lib/helpers/getEmailValidationErrors';
import { getPasswordValidationErrors } from '@/shared/lib/helpers/getPasswordValidationErrors';
import { LoginReducer } from '../../model/slices/LoginSlice';
import {
  getLoginEmail,
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
} from '@/features/Login/model/selectors/getLoginState';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { PasswordInput } from '@/features/PasswordInput';

const initialAsyncReducersLoginForm: ReducersList = { loginForm: LoginReducer };

export interface LoginFormProps {
  className?: string;
  onClose?: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;

  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(LoginActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(LoginActions.setPassword(value));
    },
    [dispatch],
  );

  const onAuthClick = useCallback(async () => {
    const result = await dispatch(loginByEmail({ email, password }));
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
      reducers={initialAsyncReducersLoginForm}
      removeAfterUnmount
    >
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <div className={cls.group}>
          {error === 'Не корректный email' && (
            <label className={cls.errorLabel}>{error}</label>
          )}
          {emailValidationErrors}

          <Input
            type="text"
            label={'Email'}
            htmlFor={'Email'}
            className={cls.input}
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div>

        <div className={cls.group}>
          {error === 'Не корректный пароль' && (
            <label className={cls.errorLabel}>{error}</label>
          )}
          {passwordValidationErrors}
          <PasswordInput
            label={'Пароль'}
            htmlFor={'Password'}
            password={password}
            onChangePassword={onChangePassword}
          />
        </div>
        <Button className={cls.Btn} onClick={onAuthClick} disabled={isLoading}>
          Войти
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
