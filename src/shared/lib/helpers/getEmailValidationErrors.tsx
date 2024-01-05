import { AuthValidationErrors } from '@/features/Auth/model/services/authByEmail';
import { RegistrationValidationErrors } from '@/features/Registration/model/services/registrationByEmail';

type EmailValidationProps =
  | string
  | AuthValidationErrors[]
  | RegistrationValidationErrors[];

export const getEmailValidationErrors = (error: EmailValidationProps) => {
  return (
    error instanceof Array &&
    error.map((item) => {
      if (item.property === 'email') {
        return item.messages.map((message, index) => (
          <label key={index}>{message}.</label>
        ));
      }
    })
  );
};
