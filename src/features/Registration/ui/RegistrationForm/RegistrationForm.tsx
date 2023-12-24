import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RegistrationActions } from '@/features/Registration/model/slices/RegistrationSlice';
import { getRegistrationState } from '@/features/Registration/model/selectors/getRegistrationState';

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className } = props;

  const dispatch = useDispatch();
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

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
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
      <Button className={cls.Btn}>Регистрация</Button>
    </div>
  );
});
