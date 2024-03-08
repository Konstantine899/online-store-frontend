import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const filteringByBrandSelector = (state: StateSchema) => {
  return state.filteringByBrand?.id ?? 0;
};
