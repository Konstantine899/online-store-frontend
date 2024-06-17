import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import cls from './AuthForm.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectEmail, selectPassword } from '../../model/selectors/selectAuth';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { AuthActions } from '../../model/slices/AuthSlice';
import { UserActions } from '@/entities/User';
import { IAuth } from '../../model/types/IAuthSchema';
import EyeOpen from '@/shared/assets/icons/eye-open.svg';
import EyeClosed from '@/shared/assets/icons/closed_eye.svg';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { QueryStatus } from '@reduxjs/toolkit/query';

export interface IAuthFormProps {
  className?: string;
  onClose: () => void;
  fetch: ({ email, password }: { email: string; password: string }) => void;
  isSuccess: boolean;
  isLoading: boolean;
  data: IAuth | undefined;
  status: QueryStatus;
}

const AuthForm = memo((props: IAuthFormProps) => {
  const { className, onClose, fetch, isSuccess, isLoading, data, status } =
    props;
  const dispatch = useAppDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const [viewPassword, setViewPassword] = useState(false);

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
    setViewPassword(!viewPassword);
  };

  const eyeSvgIcon = viewPassword ? EyeOpen : EyeClosed;

  const onEmail = (email: string) => {
    dispatch(AuthActions.setEmail(email));
  };
  const onPassword = (password: string) => {
    dispatch(AuthActions.setPassword(password));
  };

  const onClick = () => {
    fetch({ email, password });
  };

  return (
    <div className={classNames(cls.AuthForm, {}, [className])}>
      <div className={cls.group}>
        <Input
          type="text"
          label={'email'}
          htmlFor={'email'}
          value={email}
          required
          onChange={onEmail}
          theme={InputTheme.OUTLINE_BOTTOM}
        />
      </div>
      <div className={cls.group}>
        <Input
          type={viewPassword ? 'text' : 'password'}
          label={'пароль'}
          htmlFor={'password'}
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

export default AuthForm;
