import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCategorySelector = (state: StateSchema) =>
  state.category?.category ?? null;
