import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { transformVotes } from '@/shared/lib/helpers/transformVotes';

export const getRatingStateSelector = (state: StateSchema) =>
  state.rating?.rating ?? null;

export const getVotes = createSelector(getRatingStateSelector, (state) => {
  return transformVotes(`${state?.votes ?? 0}`);
});
