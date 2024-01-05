import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { AuthActions } from '@/features/Auth/model/slices/AuthSlice';
import { getAuthState } from '@/features/Auth/model/selectors/getAuthState';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { authByEmail } from '@/features/Auth/model/services/authByEmail';

interface LoginFormProps {
  className?: string;
  onClose?: () => void;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;
  const dispatch = useAppDispatch();
  const { email, password, error, isLoading } = useSelector(getAuthState);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(AuthActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(AuthActions.setPassword(value));
    },
    [dispatch],
  );

  const onAuthClick = useCallback(async () => {
    const result = await dispatch(authByEmail({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onChangeEmail('');
      onChangePassword('');
      onClose?.();
    }
  }, [dispatch, email, onChangeEmail, onChangePassword, onClose, password]);

  const emailValidationErrors =
    error instanceof Array &&
    error.map((item) => {
      if (item.property === 'email') {
        return item.messages.map((message, index) => (
          <label key={index}>{message}.</label>
        ));
      }
    });

  const passwordValidationErrors =
    error instanceof Array &&
    error.map((item) => {
      if (item.property === 'password') {
        return item.messages.map((message, index) => (
          <label key={index}>{message}.</label>
        ));
      }
    });

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      {typeof error === 'string' && (
        <label className={cls.label}>{error}</label>
      )}
      {emailValidationErrors}
      <Input
        type="text"
        className={cls.input}
        value={email}
        onChange={onChangeEmail}
      />

      {passwordValidationErrors}

      <Input
        type="text"
        className={cls.input}
        value={password}
        onChange={onChangePassword}
      />
      <Button className={cls.Btn} onClick={onAuthClick}>
        Войти
      </Button>
    </div>
  );
});
