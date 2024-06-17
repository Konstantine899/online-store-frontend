import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import cls from './RegistrationForm.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  selectAuthError,
  selectEmail,
  selectPassword,
} from '../../../model/selectors/selectAuth';
import { useRegistration } from '../../../api/registrationApi';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import EyeOpen from '@/shared/assets/icons/eye-open.svg';
import EyeClosed from '@/shared/assets/icons/closed_eye.svg';
import { AuthActions } from '../../../model/slices/AuthSlice';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { UserActions } from '@/entities/User';

export interface RegistrationFormProps {
  className?: string;
  onClose?: () => void;
}

const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, onClose } = props;
  const dispatch = useAppDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const error = useSelector(selectAuthError);
  const [fetchRegistration, { data, isLoading, status, isSuccess }] =
    useRegistration();
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
    fetchRegistration({ email, password });
  };

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
      <div className={cls.group}>
        <Input
          type="text"
          className={cls.input}
          value={email}
          onChange={onEmail}
          label={'email'}
          htmlFor={'email'}
          required
          theme={InputTheme.OUTLINE_BOTTOM}
        />
      </div>
      <div className={cls.group}>
        <Input
          type={isViewPassword ? 'text' : 'password'}
          label={'пароль'}
          htmlFor={'пароль'}
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

export default RegistrationForm;
