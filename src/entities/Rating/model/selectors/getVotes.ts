import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getVotes = (state: StateSchema) => {
  return state.rating?.rating?.votes ?? 0;
};
