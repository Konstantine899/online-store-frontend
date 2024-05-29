import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { transformVotes } from '@/shared/lib/helpers/transformVotes';

export const selectVotes = (state: StateSchema) => {
  return transformVotes(`${state.rating?.rating?.votes ?? 0}`);
};
