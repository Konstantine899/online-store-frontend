import { LoginValidationErrors } from '../services/loginByEmail';

export interface LoginSchema {
  email: string;
  password: string;
  error: string | LoginValidationErrors[];
  isLoading: boolean;
}
