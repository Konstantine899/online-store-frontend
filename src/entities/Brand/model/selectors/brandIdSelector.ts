import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const brandIdSelector = (state: StateSchema) => {
  return state.brand?.brand?.id ?? 0;
};
