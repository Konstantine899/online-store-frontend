export type {
  IAuthSchema,
  IAuth,
} from '@/entities/deprecated/Auth/model/types/IAuthSchema';
export {
  AuthActions,
  AuthReducer,
} from '@/entities/deprecated/Auth/model/slices/AuthSlice';
export { selectAuth } from '@/entities/deprecated/Auth/model/selectors/selectAuth';
export { setUserData } from '@/entities/deprecated/Auth/helpers/setUserData';
