import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getEmailValidationErrors } from '@/shared/lib/helpers/getEmailValidationErrors';
import { getPasswordValidationErrors } from '@/shared/lib/helpers/getPasswordValidationErrors';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { PasswordInput } from '@/features/PasswordInput';
import {
  getLoginEmail,
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
} from '../../model/selectors/getLoginState';
import { loginByEmail } from '../../model/services/loginByEmail';
import { LoginActions } from '../../model/slices/LoginSlice';
import { LoginReducer } from '../../model/slices/LoginSlice';

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
        {error === 'Не корректный email' && (
          <label className={cls.errorLabel}>{error}</label>
        )}
        {emailValidationErrors && (
          <label className={cls.errorLabel}>{emailValidationErrors}</label>
        )}

        <div className={cls.group}>
          <Input
            type="text"
            label={'Email'}
            htmlFor={'Email'}
            className={cls.loginInput}
            value={email}
            required
            onChange={onChangeEmail}
            theme={InputTheme.STANDARD}
          />
        </div>

        {error === 'Не корректный пароль' && (
          <label className={cls.errorLabel}>{error}</label>
        )}
        {passwordValidationErrors && (
          <label className={cls.errorLabel}>{passwordValidationErrors}</label>
        )}

        <div className={cls.group}>
          <PasswordInput
            label={'Пароль'}
            htmlFor={'Password'}
            password={password}
            onChangePassword={onChangePassword}
          />
        </div>
        <Button
          className={cls.Btn}
          onClick={onAuthClick}
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
        >
          Войти
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
