import { RegistrationValidationErrors } from '../services/registrationByEmail';

export interface RegistrationSchema {
  email: string;
  password: string;
  error: string | RegistrationValidationErrors[];
  isLoading: boolean;
}
