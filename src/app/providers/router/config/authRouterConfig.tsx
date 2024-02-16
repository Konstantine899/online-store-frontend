import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
  authRouter,
  getRouteAuthCheck,
  getRouteCreateRating,
  getRouteLogout,
  getRouteRefreshToken,
  getRouterUserMakePayment,
  getRouteUserCreateOrder,
  getRouteUserGetOrder,
  getRouteUserGetOrderList,
} from '@/shared/consts/router/authRouter';

export const authRouterConfig: Record<authRouter, RouteProps> = {
  [authRouter.REFRESH]: { path: getRouteRefreshToken() },
  [authRouter.CHECK]: { path: getRouteAuthCheck() },
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
    element: (
      <NotFoundPage
        message={'К сожалению запрашиваемая вами страница не найдена'}
      />
    ),
  },
};
