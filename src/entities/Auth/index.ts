export type {
  IAuthSchema,
  IAuth,
} from '@/entities/Auth/model/types/IAuthSchema';
export {
  AuthActions,
  AuthReducer,
} from '@/entities/Auth/model/slices/AuthSlice';
export { selectAuth } from '@/entities/Auth/model/selectors/selectAuth';
export { setUserData } from './helpers/setUserData';
