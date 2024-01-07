import { UserSchema } from '@/entities/User';
import { RegistrationSchema } from '@/features/Registration';
import { LoginSchema } from '@/features/Login';

export interface StateSchema {
  user: UserSchema;
  registrationForm?: RegistrationSchema;
  loginForm?: LoginSchema;
}
