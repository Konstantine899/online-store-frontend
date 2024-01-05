import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { RegistrationActions } from '@/features/Registration/model/slices/RegistrationSlice';
import { getRegistrationState } from '@/features/Registration/model/selectors/getRegistrationState';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { registrationByEmail } from '../../model/services/registrationByEmail';
import { getEmailValidationErrors } from '@/shared/lib/helpers/getEmailValidationErrors';
import { getPasswordValidationErrors } from '@/shared/lib/helpers/getPasswordValidationErrors';

interface RegistrationFormProps {
  className?: string;
  onClose?: () => void;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, onClose } = props;

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

  const onRegistrationClick = useCallback(async () => {
    const result = await dispatch(registrationByEmail({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onChangeEmail('');
      onChangePassword('');
      onClose?.();
    }
  }, [dispatch, email, onChangeEmail, onChangePassword, onClose, password]);

  const emailValidationErrors = getEmailValidationErrors(error);

  const passwordValidationErrors = getPasswordValidationErrors(error);

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
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
      <Button
        className={cls.Btn}
        onClick={onRegistrationClick}
        disabled={isLoading}
      >
        Регистрация
      </Button>
    </div>
  );
});
