import { RegistrationValidationErrors } from '@/shared/types/RegistrationValidationErrors';

export interface RegistrationSchema {
  email: string;
  password: string;
  error: string | RegistrationValidationErrors[];
  isLoading: boolean;
}
