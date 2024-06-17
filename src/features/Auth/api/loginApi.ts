import { rtkApi } from '@/shared/api/rtkApi';
import { getRouteLogin } from '@/shared/consts/router/authRouter';
import { IAuth } from '../model/types/IAuthSchema';

interface ILoginParams {
  email: string;
  password: string;
}

export const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchLogin: build.mutation<IAuth, ILoginParams>({
      query: ({ email, password }) => {
        return {
          url: getRouteLogin(),
          body: { email, password },
          method: 'POST',
        };
      },
    }),
  }),
});

export const useLogin = loginApi.useFetchLoginMutation;
