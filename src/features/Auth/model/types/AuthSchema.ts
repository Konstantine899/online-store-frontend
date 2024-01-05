import { AuthValidationErrors } from '@/features/Auth/model/services/authByEmail';

export interface AuthSchema {
  email: string;
  password: string;
  error: string | AuthValidationErrors[];
  isLoading: boolean;
}
