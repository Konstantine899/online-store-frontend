import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getRating = (state: StateSchema) => {
  return state.rating?.rating?.rating ?? 0;
};
