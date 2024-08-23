export { LoginModal } from '@/features/Auth/ui/LoginModal/LoginModal';
export { RegistrationModal } from '@/features/Auth/ui/RegistrationModal/RegistrationModal';
export { AuthReducer, AuthActions } from './model/slices/AuthSlice';
export {
  AuthModalReducer,
  AuthModalSlice,
  AuthModalActions,
} from './model/slices/AuthModal';
export type { IAuthSchema } from './model/types/IAuthSchema';
export type { IAuthModalSchema } from './model/types/IAuthModalSchema';
