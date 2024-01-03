import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { RegistrationActions } from '@/features/Registration/model/slices/RegistrationSlice';
import { getRegistrationState } from '@/features/Registration/model/selectors/getRegistrationState';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { registrationByEmail } from '@/features/Registration/model/services/registrationByEmail';

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { email, password, error, isLoading } =
    useSelector(getRegistrationState);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(RegistrationActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(RegistrationActions.setPassword(value));
    },
    [dispatch],
  );

  const onRegistrationClick = useCallback(() => {
    dispatch(registrationByEmail({ email, password }));
  }, [dispatch, email, password]);

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
      {error && <label>{error}</label>}
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
      <Button className={cls.Btn} onClick={onRegistrationClick}>
        Регистрация
      </Button>
    </div>
  );
});
