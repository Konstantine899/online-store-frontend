import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCurrentPage = (state: StateSchema) =>
  state.productsList?.metaData?.currentPage ?? 1;

export const getLimit = (state: StateSchema) =>
  state.productsList?.metaData?.limit ?? 1;

export const getNextPage = (state: StateSchema) =>
  state.productsList?.metaData?.nextPage ?? 1;

export const getPreviosPage = (state: StateSchema) =>
  state.productsList?.metaData?.previousPage ?? 1;

export const getLastPage = (state: StateSchema) =>
  state.productsList?.metaData?.lastPage ?? 1;
