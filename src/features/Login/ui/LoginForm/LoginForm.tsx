import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { PasswordInput } from '@/shared/lib/components/PasswordInput';
import {
  selectLoginEmail,
  selectLoginIsLoading,
  selectLoginPassword,
} from '../../model/selectors/selectLogin';
import { loginByEmail } from '../../model/services/loginByEmail';
import { LoginActions } from '../../model/slices/LoginSlice';

export interface LoginFormProps {
  className?: string;
  onClose?: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;

  const dispatch = useAppDispatch();
  const email = useSelector(selectLoginEmail);
  const password = useSelector(selectLoginPassword);
  const isLoading = useSelector(selectLoginIsLoading);

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

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.group}>
        <Input
          type="text"
          label={'Email'}
          htmlFor={'Email'}
          className={cls.loginInput}
          value={email}
          required
          onChange={onChangeEmail}
          theme={InputTheme.OUTLINE_BOTTOM}
        />
      </div>

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
  );
});

export default LoginForm;
