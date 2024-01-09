import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector, useStore } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { LoginActions, loginByEmail } from '@/features/Login';
import { getEmailValidationErrors } from '@/shared/lib/helpers/getEmailValidationErrors';
import { getPasswordValidationErrors } from '@/shared/lib/helpers/getPasswordValidationErrors';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider/config/StateSchema';
import { LoginReducer } from '../../model/slices/LoginSlice';
import {
  getLoginEmail,
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
} from '@/features/Login/model/selectors/getLoginState';

export interface LoginFormProps {
  className?: string;
  onClose?: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  useEffect(() => {
    store.reducerManager.add('loginForm', LoginReducer);
    dispatch({ type: 'mounting modal window login' });
    return () => {
      store.reducerManager.remove('loginForm');
      dispatch({ type: 'unmounting modal window login' });
    };
  }, [dispatch, store.reducerManager]);

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
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {error === 'Не корректный email' && (
        <label className={cls.label}>{error}</label>
      )}
      {emailValidationErrors}
      <Input
        type="text"
        className={cls.input}
        value={email}
        onChange={onChangeEmail}
      />

      {error === 'Не корректный пароль' && (
        <label className={cls.label}>{error}</label>
      )}
      {passwordValidationErrors}

      <Input
        type="text"
        className={cls.input}
        value={password}
        onChange={onChangePassword}
      />
      <Button className={cls.Btn} onClick={onAuthClick} disabled={isLoading}>
        Войти
      </Button>
    </div>
  );
});

export default LoginForm;
