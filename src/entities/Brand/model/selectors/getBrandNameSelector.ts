import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBrandNameSelector = (state: StateSchema) => {
  return state.brand?.brand?.name ?? '';
};
