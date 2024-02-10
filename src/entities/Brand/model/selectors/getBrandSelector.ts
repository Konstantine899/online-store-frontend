import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBrandSelector = (state: StateSchema) => {
  return state.brand?.id ?? 0;
};
