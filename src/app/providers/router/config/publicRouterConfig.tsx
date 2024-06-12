import { RouteProps } from 'react-router-dom';
import { ProductsPage } from '@/pages/ProductsPage';
import {
  getRouteBrandsByCategory,
  getRouteAppendToCart,
  getRouteAuth,
  getRouteBrand,
  getRouteBrands,
  getRouteCart,
  getRouteCategory,
  getRouteClearCart,
  getRouteDecreaseInTheQuantityInTheCart,
  getRouteGuestCreateOrder,
  getRouteGuestMakePayment,
  getRouteIncreaseInTheQuantityInTheCart,
  getRouteCategories,
  getRouteProductProperties,
  getRouteProducts,
  getRouteProductsByBrand,
  getRouteProductsByCategoryAndBrand,
  getRouteProductsByCategory,
  getRouteMain,
  getRouteProduct,
  getRouteRating,
  getRouteRemoveProductFromCart,
  getRouterProductProperty,
  getRouteSingUp,
  publicRouter,
} from '@/shared/consts/router/publicRouter';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProductDetailsPage } from '@/pages/ProductDetailsPage';
import { MainPage } from '@/pages/MainPage';
import { ProductsByCategoryPage } from '@/pages/ProductsByCategoryPage';
import { ProductsByCategoryAndBrandPage } from '@/pages/ProductsByCategoryAndBrandPage';

export const publicRouterConfig: Record<publicRouter, RouteProps> = {
  [publicRouter.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [publicRouter.SIGN_UP]: {
    path: getRouteSingUp(),
  },
  [publicRouter.AUTH]: { path: getRouteAuth() },
  [publicRouter.GET_LIST_ALL_BRANDS]: { path: getRouteBrands() },
  [publicRouter.GET_LIST_ALL_BRANDS_BY_CATEGORY]: {
    path: getRouteBrandsByCategory(':categoryId'),
  },
  [publicRouter.GET_BRAND]: { path: getRouteBrand(':id') },
  [publicRouter.GET_CART]: { path: getRouteCart() },
  [publicRouter.APPEND_TO_CART]: {
    path: getRouteAppendToCart(':productId', ':quantity'),
  },
  [publicRouter.INCREASE_IN_THE_QUANTITY_IN_THE_CART]: {
    path: getRouteIncreaseInTheQuantityInTheCart(':productId', ':quantity'),
  },
  [publicRouter.DECREASE_IN_THE_QUANTITY_IN_THE_CART]: {
    path: getRouteDecreaseInTheQuantityInTheCart(':productId', ':quantity'),
  },
  [publicRouter.REMOVE_PRODUCT_FROM_CART]: {
    path: getRouteRemoveProductFromCart(':productId'),
  },
  [publicRouter.CLEAR_CART]: { path: getRouteClearCart() },
  [publicRouter.GET_LIST_ALL_CATEGORIES]: {
    path: getRouteCategories(),
  },
  [publicRouter.GET_CATEGORY]: {
    path: getRouteCategory(':id'),
  },
  [publicRouter.GUEST_CREATE_ORDER]: {
    path: getRouteGuestCreateOrder(),
  },
  [publicRouter.GUEST_MAKE_PAYMENT]: {
    path: getRouteGuestMakePayment(),
  },
  [publicRouter.GET_PRODUCT_PROPERTY]: {
    path: getRouterProductProperty(':productId', ':id'),
  },
  [publicRouter.GET_LIST_PRODUCT_PROPERTY]: {
    path: getRouteProductProperties(':productId'),
  },
  [publicRouter.GET_PRODUCT]: {
    path: getRouteProduct(':id'),
    element: <ProductDetailsPage />,
  },
  [publicRouter.GET_LIST_PRODUCT]: {
    path: getRouteProducts(),
    element: <ProductsPage />,
  },
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID]: {
    path: getRouteProductsByBrand(':brandId'),
    element: <ProductsPage />,
  },
  [publicRouter.GET_LIST_PRODUCT_BY_CATEGORY_ID]: {
    path: getRouteProductsByCategory(':categoryId'),
    element: <ProductsByCategoryPage />,
  },
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID_AND_CATEGORY_ID]: {
    path: getRouteProductsByCategoryAndBrand(':brandId', ':categoryId'),
    element: <ProductsByCategoryAndBrandPage />,
  },
  [publicRouter.GET_RATING]: {
    path: getRouteRating(':productId'),
  },
  [publicRouter.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
