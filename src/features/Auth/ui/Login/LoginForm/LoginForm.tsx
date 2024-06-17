import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import cls from './LoginForm.module.scss';
import { useLogin } from '../../../api/loginApi';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import {
  selectAuthError,
  selectEmail,
  selectPassword,
} from '../../../model/selectors/selectAuth';
import EyeClosed from '@/shared/assets/icons/closed_eye.svg';
import EyeOpen from '@/shared/assets/icons/eye-open.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AuthActions } from '../../../model/slices/AuthSlice';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { UserActions } from '@/entities/User';

export interface LoginFormProps {
  className?: string;
  onClose?: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onClose } = props;
  const dispatch = useAppDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const error = useSelector(selectAuthError);
  const [fetchLogin, { data, isLoading, isSuccess, status, isError }] =
    useLogin();
  const [isViewPassword, setIsViewPassword] = useState(false);

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem(TOKEN_TYPE_KEY, JSON.stringify(data.type));
      localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(data.accessToken));
      localStorage.setItem(
        REFRESH_TOKEN_KEY,
        JSON.stringify(data.refreshToken),
      );
      dispatch(AuthActions.initAuthData());
      dispatch(UserActions.initUserData());
    }
  }, [data, dispatch, isSuccess]);

  useEffect(() => {
    if (status === 'fulfilled') {
      onClose?.();
    }
  }, [dispatch, onClose, status]);

  const onViewPassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const eyeSvgIcon = isViewPassword ? EyeOpen : EyeClosed;

  const onEmail = (email: string) => {
    dispatch(AuthActions.setEmail(email));
  };
  const onPassword = (password: string) => {
    dispatch(AuthActions.setPassword(password));
  };

  const onClick = () => {
    fetchLogin({ email, password });
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.group}>
        <Input
          type="text"
          label={'Email'}
          htmlFor={'Email'}
          value={email}
          required
          onChange={onEmail}
          theme={InputTheme.OUTLINE_BOTTOM}
        />
      </div>
      <div className={cls.group}>
        <Input
          type={isViewPassword ? 'text' : 'password'}
          label={'Пароль'}
          htmlFor={'Password'}
          value={password}
          required
          onChange={onPassword}
          Svg={eyeSvgIcon}
          onViewPassword={onViewPassword}
          theme={InputTheme.OUTLINE_BOTTOM}
        />
      </div>
      <Button
        className={cls.Btn}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        onClick={onClick}
      >
        Войти
      </Button>
    </div>
  );
});

export default LoginForm;
