import { LoginValidationErrors } from '@/features/Login';
import { RegistrationValidationErrors } from '@/features/Registration/model/services/registrationByEmail';

type PasswordValidationProps =
  | string
  | LoginValidationErrors[]
  | RegistrationValidationErrors[];
export const getPasswordValidationErrors = (error: PasswordValidationProps) => {
  return (
    error instanceof Array &&
    error.map((item) => {
      if (item.property === 'password') {
        return item.messages.map((message, index) => (
          <label key={index}>{message}.</label>
        ));
      }
    })
  );
};
