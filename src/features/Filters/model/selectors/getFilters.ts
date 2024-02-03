import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getSearchSelector = (state: StateSchema) =>
  state.filter.search ?? '';
