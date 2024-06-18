import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './AuthForm.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { AuthActions } from '../../model/slices/AuthSlice';
import { UserActions } from '@/entities/User';
import { IAuth } from '../../model/types/IAuthSchema';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { EmailInput } from '../EmailInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { SendButton } from '../SendButton/SendButton';

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
    if (status === 'fulfilled') {
      onClose?.();
    }
  }, [data, dispatch, isSuccess, onClose, status]);

  return (
    <div className={classNames(cls.AuthForm, {}, [className])}>
      <EmailInput />
      <PasswordInput />
      <SendButton isLoading={isLoading} fetch={fetch} />
    </div>
  );
});

export default AuthForm;
