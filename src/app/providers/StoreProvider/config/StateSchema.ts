import { UserSchema } from '@/entities/User';
import { RegistrationSchema } from '@/features/Registration';
import { LoginSchema } from '@/features/Login';
import { AuthSchema } from '@/features/Auth';

export interface StateSchema {
  auth: AuthSchema;
  user: UserSchema;
  registrationForm?: RegistrationSchema;
  loginForm?: LoginSchema;
}
