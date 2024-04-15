import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getProductDetailsSelector = (state: StateSchema) => {
  return state.productDetailsPage?.productDetails ?? null;
};
