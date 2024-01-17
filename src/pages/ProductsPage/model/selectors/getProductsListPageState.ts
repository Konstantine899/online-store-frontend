import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ProductsList } from '@/pages/ProductsPage/model/types/ProductsPageSchema';

export const getProductsListPageState = (state: StateSchema) =>
  state?.productsListPage?.productsList ?? null;

export const getProductsState = createSelector(
  getProductsListPageState,
  (state: ProductsList) => state?.rows ?? [],
);
