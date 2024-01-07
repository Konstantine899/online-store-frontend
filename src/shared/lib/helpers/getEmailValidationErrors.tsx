import { LoginValidationErrors } from '@/features/Login';
import { RegistrationValidationErrors } from '@/features/Registration';

type EmailValidationProps =
  | string
  | LoginValidationErrors[]
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
