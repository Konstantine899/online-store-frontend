import { LoginValidationErrors } from '@/shared/types/LoginValidationErrors';

export interface LoginSchema {
  email: string;
  password: string;
  error: string | LoginValidationErrors[];
  isLoading: boolean;
}
