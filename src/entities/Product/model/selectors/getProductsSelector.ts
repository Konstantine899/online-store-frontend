import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ProductsSchema } from '../types/ProductsSchema';

export const getProductsSelector = (state: StateSchema) => {
  return state.productsList;
};

export const getProductsListSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema | undefined) => state?.rows ?? [],
);

export const getProductsListIsLoadingSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema | undefined) => {
    return state?.isLoading ?? false;
  },
);

export const getProductsListInitedSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema | undefined) => {
    return state?._inited ?? false;
  },
);

export const getLimitSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema | undefined) => {
    return state?.metaData?.limit ?? 5;
  },
);

export const getCountSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema | undefined) => {
    return state?.metaData?.totalCount ?? 0;
  },
);
export const getSearchSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema | undefined) => {
    return state?.search ?? '';
  },
);
export const getSortOrderSelector = createSelector(
  getProductsSelector,
  (state: ProductsSchema | undefined) => {
    return state?.sortingOrder ?? 'asc';
  },
);

/* Получение состояния для карусели */
export const getProductsCarouselStateSelector = (state: StateSchema) => {
  return state.mainPage?.productsCarouselList;
};

export const getProductsCarouselRowsSelector = createSelector(
  getProductsCarouselStateSelector,
  (state: ProductsSchema | undefined) => {
    return state?.rows ?? [];
  },
);
