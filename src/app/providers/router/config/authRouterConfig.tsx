import { RouteProps } from 'react-router-dom';
import {
  authRouter,
  getRouteAuthCheck,
  getRouteCreateRating,
  getRouteLogin,
  getRouteLogout,
  getRouteRefreshToken,
  getRouteRegistration,
  getRouterUserMakePayment,
  getRouteUserCreateOrder,
  getRouteUserGetOrder,
  getRouteUserGetOrderList,
} from '@/shared/consts/router/authRouter';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const authRouterConfig: Record<authRouter, RouteProps> = {
  [authRouter.REFRESH]: { path: getRouteRefreshToken() },
  [authRouter.CHECK]: { path: getRouteAuthCheck() },
  [authRouter.REGISTRATION]: { path: getRouteRegistration() },
  [authRouter.LOGIN]: { path: getRouteLogin() },
  [authRouter.LOGOUT]: { path: getRouteLogout() },
  [authRouter.USER_GET_ORDER_LIST]: { path: getRouteUserGetOrderList() },
  [authRouter.USER_GET_ORDER]: { path: getRouteUserGetOrder(':orderId') },
  [authRouter.USER_CREATE_ORDER]: { path: getRouteUserCreateOrder() },
  [authRouter.USER_MAKE_PAYMENT]: { path: getRouterUserMakePayment() },
  [authRouter.CREATE_RATING]: {
    path: getRouteCreateRating(':productId', ':rating'),
  },
  [authRouter.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
