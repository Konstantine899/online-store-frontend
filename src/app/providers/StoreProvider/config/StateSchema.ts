import { UserSchema } from '@/entities/User';
import { RegistrationSchema } from '@/features/Registration';
import { AuthSchema } from '@/features/Auth';

export interface StateSchema {
  user: UserSchema;
  registrationForm?: RegistrationSchema;
  loginForm?: AuthSchema;
}
