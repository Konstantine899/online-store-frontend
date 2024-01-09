import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { useSelector, useStore } from 'react-redux';
import {
  RegistrationActions,
  RegistrationReducer,
} from '@/features/Registration/model/slices/RegistrationSlice';
import {
  getRegistrationEmail,
  getRegistrationError,
  getRegistrationIsLoading,
  getRegistrationPassword,
} from '../../model/selectors/getRegistrationState';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { registrationByEmail } from '../../model/services/registrationByEmail';
import { getEmailValidationErrors } from '@/shared/lib/helpers/getEmailValidationErrors';
import { getPasswordValidationErrors } from '@/shared/lib/helpers/getPasswordValidationErrors';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider/config/StateSchema';

export interface RegistrationFormProps {
  className?: string;
  onClose?: () => void;
}

const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, onClose } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();
  const email = useSelector(getRegistrationEmail);
  const password = useSelector(getRegistrationPassword);
  const isLoading = useSelector(getRegistrationIsLoading);
  const error = useSelector(getRegistrationError);

  useEffect(() => {
    store.reducerManager.add('registrationForm', RegistrationReducer);
    dispatch({ type: 'mounting modal window registration' });
    return () => {
      store.reducerManager.remove('registrationForm');
      dispatch({ type: 'unmounting modal window registration' });
    };
  }, [dispatch, store.reducerManager]);

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

export default RegistrationForm;
