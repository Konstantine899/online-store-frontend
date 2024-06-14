import { LoginValidationErrors } from '@/shared/types/LoginValidationErrors';

/**
 * @deprecated
 */
export interface LoginSchema {
  email: string;
  password: string;
  error?: string | LoginValidationErrors[];
  isLoading: boolean;
}
