import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '@/features/Auth/model/slices/AuthSlice';
import { getAuthState } from '@/features/Auth/model/selectors/getAuthState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const dispatch = useDispatch();
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

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        value={email}
        onChange={onChangeEmail}
      />
      <Input
        type="text"
        className={cls.input}
        value={password}
        onChange={onChangePassword}
      />
      <Button className={cls.Btn}>Войти</Button>
    </div>
  );
});
