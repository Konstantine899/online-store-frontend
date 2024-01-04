import { MessagesError } from '@/features/Registration/model/services/registrationByEmail';

export interface RegistrationSchema {
  email: string;
  password: string;
  assessToken: string;
  refreshToken: string;
  error: string | MessagesError[];
  isLoading: boolean;
}
