export type { AuthSchema, Auth } from '@/entities/Auth/model/types/AuthSchema';
export {
  AuthActions,
  AuthReducer,
} from '@/entities/Auth/model/slices/AuthSlice';
export { selectAuth } from '@/entities/Auth/model/selectors/selectAuth';
export { setUserData } from './helpers/setUserData';
