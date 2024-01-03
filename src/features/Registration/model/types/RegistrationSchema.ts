export interface RegistrationSchema {
  email: string;
  password: string;
  assessToken: string;
  refreshToken: string;
  error: string;
  isLoading: boolean;
}
