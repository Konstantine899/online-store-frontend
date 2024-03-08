import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getProductDetailsIsLoadingSelector = (state: StateSchema) => {
  return state.productDetailsPage?.isLoading ?? false;
};

export const getProductDetailsErrorSelector = (state: StateSchema) => {
  return state.productDetailsPage?.isLoading ?? false;
};

export const getProductDetailsInitedSelector = (state: StateSchema) => {
  return state.productDetailsPage?.productDetails?._inited || false;
};
