import { memo, useEffect } from 'react';
import cls from './RegistrationForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useRegistration } from '../../api/registrationApi';
import { setUserData } from '../../lib/helpers/setUserData';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AuthModalActions } from '../../model/slices/AuthModal';
import { EmailValidationErrors } from '../EmailValidationErrors/EmailValidationErrors';
import { InputEmail } from '../InputEmail/InputEmail';
import { PasswordValidationErrors } from '../PasswordValidationErrors/PasswordValidationErrors';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { SendButton } from '../SendButton/SendButton';

export interface RegistrationFormProps {
  className?: string;
}

const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className } = props;

  const [fetchRegistration, { data, isLoading, isSuccess, isError }] =
    useRegistration();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess && data) {
      setUserData(data, dispatch);
      dispatch(AuthModalActions.setOpenRegistrationModal(false));
    }
  }, [data, dispatch, isSuccess]);

  if (isError) {
    return (
      <div className={classNames(cls.RegistrationForm, {}, [className])}>
        <EmailValidationErrors />
        <InputEmail />
        <PasswordValidationErrors />
        <PasswordInput />
        <SendButton isLoading={isLoading} fetch={fetchRegistration} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
      <InputEmail />
      <PasswordInput />
      <SendButton isLoading={isLoading} fetch={fetchRegistration} />
    </div>
  );
});

export default RegistrationForm;

RegistrationForm.displayName = `RegistrationForm`;
