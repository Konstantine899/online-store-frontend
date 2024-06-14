import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './RegistrationForm.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { useSelector } from 'react-redux';
// eslint-disable-next-line feature-slised-design-bak-plugin/layer-imports
import { RegistrationActions } from '@/features/deprecated/Registration/model/slices/RegistrationSlice';
// eslint-disable-next-line feature-slised-design-bak-plugin/layer-imports
import {
  selectRegistrationEmail,
  selectRegistrationError,
  selectRegistrationIsLoading,
  selectRegistrationPassword,
} from '@/features/deprecated/Registration/model/selectors/selectRegistration';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
// eslint-disable-next-line feature-slised-design-bak-plugin/layer-imports
import { registrationByEmail } from '@/features/deprecated/Registration/model/services/registrationByEmail';
import { getEmailValidationErrors } from '@/shared/lib/helpers/getEmailValidationErrors';
import { getPasswordValidationErrors } from '@/shared/lib/helpers/getPasswordValidationErrors';
import { PasswordInput } from '@/shared/lib/components/PasswordInput';

export interface RegistrationFormProps {
  className?: string;
  onClose?: () => void;
}

/**
 * @deprecated
 */
const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, onClose } = props;

  const dispatch = useAppDispatch();
  const email = useSelector(selectRegistrationEmail);
  const password = useSelector(selectRegistrationPassword);
  const isLoading = useSelector(selectRegistrationIsLoading);
  const error = useSelector(selectRegistrationError);

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
        <label className={cls.errorLabel}>{error}</label>
      )}
      {emailValidationErrors && (
        <label className={cls.errorLabel}>{emailValidationErrors}</label>
      )}
      <div className={cls.group}>
        <Input
          type="text"
          className={cls.input}
          value={email}
          onChange={onChangeEmail}
          label={'email'}
          htmlFor={'email'}
          required
          theme={InputTheme.OUTLINE_BOTTOM}
        />
      </div>

      {passwordValidationErrors && (
        <label className={cls.errorLabel}>{passwordValidationErrors}</label>
      )}

      <div className={cls.group}>
        <PasswordInput
          label={'пароль'}
          htmlFor={'пароль'}
          password={password}
          onChangePassword={onChangePassword}
        />
      </div>
      <Button
        className={cls.Btn}
        onClick={onRegistrationClick}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
      >
        Регистрация
      </Button>
    </div>
  );
});

export default RegistrationForm;
