import { RouteProps } from 'react-router-dom';
import { LoginModal } from '@/features/Login';
import { RegistrationModal } from '@/features/Registration';
import { ProductsPage } from '@/pages/ProductsPage';
import {
  getRouteAllBrands,
  getRouteAppendToCart,
  getRouteAuth,
  getRouteBrand,
  getRouteCart,
  getRouteCategory,
  getRouteClearCart,
  getRouteDecreaseInTheQuantityInTheCart,
  getRouteGuestCreateOrder,
  getRouteGuestMakePayment,
  getRouteIncreaseInTheQuantityInTheCart,
  getRouteListAllCategories,
  getRouteListProductProperty,
  getRouteListProducts,
  getRouteListProductsByBrand,
  getRouteListProductsByBrandAndByCategory,
  getRouteListProductsByCategory,
  getRouteMain,
  getRouteProduct,
  getRouteRating,
  getRouteRemoveProductFromCart,
  getRouterProductProperty,
  getRouteSingUp,
  publicRouter,
} from '@/shared/consts/router/publicRouter';
import { ProductListNotFound } from '@/entities/Product';

export const publicRouterConfig: Record<publicRouter, RouteProps> = {
  [publicRouter.MAIN]: {
    path: getRouteMain(),
    element: <ProductsPage />,
  },
  [publicRouter.SIGN_UP]: {
    path: getRouteSingUp(),
    element: <RegistrationModal />,
  },
  [publicRouter.AUTH]: { path: getRouteAuth(), element: <LoginModal /> },
  [publicRouter.GET_LIST_ALL_BRANDS]: { path: getRouteAllBrands() },
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
    path: getRouteListAllCategories(),
  },
  [publicRouter.GET_CATEGORY]: {
    path: getRouteCategory(':id'),
    element: <ProductsPage />,
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
    path: getRouteListProductProperty(':productId'),
  },
  [publicRouter.GET_PRODUCT]: {
    path: getRouteProduct(':id'),
  },
  [publicRouter.GET_LIST_PRODUCT]: {
    path: getRouteListProducts(),
    element: <ProductsPage />,
  },
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID]: {
    path: getRouteListProductsByBrand(':brandId'),
  },
  [publicRouter.GET_LIST_PRODUCT_BY_CATEGORY_ID]: {
    path: getRouteListProductsByCategory(':categoryId'),
  },
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID_AND_CATEGORY_ID]: {
    path: getRouteListProductsByBrandAndByCategory(':brandId', ':categoryId'),
  },
  [publicRouter.GET_RATING]: {
    path: getRouteRating(':productId'),
  },
  [publicRouter.NOT_FOUND]: {
    path: '*',
    element: (
      <ProductListNotFound
        message={'К сожалению запрашиваемая вами страница не найдена'}
      />
    ),
  },
};
