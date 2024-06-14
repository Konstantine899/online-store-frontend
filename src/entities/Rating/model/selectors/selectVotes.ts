import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { transformVotes } from '../../lib/helpers/transformVotes';

export const selectVotes = (state: StateSchema) => {
  return transformVotes(`${state.rating?.rating?.votes ?? 0}`);
};
