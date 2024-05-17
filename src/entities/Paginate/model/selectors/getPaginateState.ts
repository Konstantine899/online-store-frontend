import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCurrentPage = (state: StateSchema) =>
  state.entityProduct?.products?.metaData?.currentPage ?? 1;

export const getLimit = (state: StateSchema) =>
  state.entityProduct?.products?.metaData?.limit ?? 1;

export const getNextPage = (state: StateSchema) =>
  state.entityProduct?.products?.metaData?.nextPage ?? 1;

export const getPreviosPage = (state: StateSchema) =>
  state.entityProduct?.products?.metaData?.previousPage ?? 1;

export const getLastPage = (state: StateSchema) =>
  state.entityProduct?.products?.metaData?.lastPage ?? 1;
