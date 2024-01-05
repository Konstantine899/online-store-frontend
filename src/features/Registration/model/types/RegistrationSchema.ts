import { MessagesError } from '@/features/Registration/model/services/registrationByEmail';

export interface RegistrationSchema {
  email: string;
  password: string;
  error: string | MessagesError[];
  isLoading: boolean;
}
