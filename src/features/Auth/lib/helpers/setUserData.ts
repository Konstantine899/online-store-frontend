import { IAuth } from '../../model/types/IAuthSchema';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_TYPE_KEY,
} from '@/shared/consts/localstorage';
import { AuthActions } from '../../model/slices/AuthSlice';
import { UserActions } from '@/entities/User';
import { AppDispatch } from '@/app/providers/StoreProvider';

export function setUserData(data: IAuth, dispatch: AppDispatch) {
  localStorage.setItem(TOKEN_TYPE_KEY, JSON.stringify(data.type));
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(data.accessToken));
  localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(data.refreshToken));
  dispatch(AuthActions.initAuthData());
  dispatch(UserActions.initUserData());
}
