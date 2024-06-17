import { rtkApi } from '@/shared/api/rtkApi';
import { getRouteRegistration } from '@/shared/consts/router/authRouter';
import { IAuth } from '../model/types/IAuthSchema';

interface IRegistrationParams {
  email: string;
  password: string;
}

export const registrationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchRegistration: build.mutation<IAuth, IRegistrationParams>({
      query: ({ email, password }) => {
        return {
          url: getRouteRegistration(),
          body: { email, password },
          method: 'POST',
        };
      },
    }),
  }),
});

export const useRegistration = registrationApi.useFetchRegistrationMutation;
