import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getProductDetailsPageSelector = (state: StateSchema) => {
  return state.productDetailsPage?.productDetails ?? null;
};
