import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCategoryNameSelector = (state: StateSchema) => {
  return state.category?.category?.name ?? null;
};
