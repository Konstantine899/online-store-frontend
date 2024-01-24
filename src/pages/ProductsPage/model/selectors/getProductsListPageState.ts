import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ProductsPageSchema } from '@/pages/ProductsPage';

export const getProductsListPageState = (state: StateSchema) =>
  state?.productsListPage ?? null;

export const getProductsState = createSelector(
  getProductsListPageState,
  (state: ProductsPageSchema) => state?.rows ?? [],
);
