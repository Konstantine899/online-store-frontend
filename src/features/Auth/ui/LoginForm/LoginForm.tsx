import { memo, useEffect } from 'react';
import { useLogin } from '../../api/loginApi';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { AuthModalActions } from '../../model/slices/AuthModal';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { EmailValidationErrors } from '../EmailValidationErrors/EmailValidationErrors';
import { InputEmail } from '../InputEmail/InputEmail';
import { PasswordValidationErrors } from '../PasswordValidationErrors/PasswordValidationErrors';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { SendButton } from '../SendButton/SendButton';
import { setUserData } from '../../lib/helpers/setUserData';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const [fetchLogin, { data, isLoading, isSuccess, status, isError }] =
    useLogin();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      setUserData(data, dispatch);
      dispatch(AuthModalActions.setOpenLoginModal(false));
    }
  }, [data, dispatch, isSuccess, status]);

  if (isError) {
    return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <EmailValidationErrors />
        <InputEmail />
        <PasswordValidationErrors />
        <PasswordInput />
        <SendButton isLoading={isLoading} fetch={fetchLogin} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <InputEmail />
      <PasswordInput />
      <SendButton isLoading={isLoading} fetch={fetchLogin} />
    </div>
  );
});

export default LoginForm;

LoginForm.displayName = `LoginForm`;
