import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ProductsSchema } from '@/pages/ProductsPage';

export const getProductsSelector = (state: StateSchema) =>
  state?.productsListPage ?? null;

export const getProductsListSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema) => state?.rows ?? [],
);

export const getProductsListIsLoadingSelector = (state: StateSchema) =>
  state?.productsListPage?.isLoading ?? false;
