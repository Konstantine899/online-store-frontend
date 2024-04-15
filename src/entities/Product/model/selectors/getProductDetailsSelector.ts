import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getProductDetailsSelector = (state: StateSchema) => {
  return state.productDetailsPage?.productDetails ?? null;
};
export const getProductDetailsIsLoadingSelector = (state: StateSchema) => {
  return state.productDetailsPage?.isLoading ?? false;
};
export const getProductDetailsErrorSelector = (state: StateSchema) => {
  return state.productDetailsPage?.error ?? '';
};

export const getProductDetailsInitedSelector = (state: StateSchema) => {
  return state.productDetailsPage?._inited ?? false;
};
