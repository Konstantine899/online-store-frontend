import { RouteProps } from 'react-router-dom';

export enum authRouter {
  REFRESH = 'refresh',
  CHECK = 'check',
  LOGOUT = 'logout',
  USER_GET_ORDER_LIST = 'user_get_order_list',
  USER_GET_ORDER = 'user_get_order',
  USER_CREATE_ORDER = 'user_create_order',
  USER_MAKE_PAYMENT = 'user_make_payment',
  CREATE_RATING = 'create_rating',
}

export const authRoutePath: Record<authRouter, string> = {
  [authRouter.REFRESH]: '/auth/refresh',
  [authRouter.CHECK]: '/auth/check',
  [authRouter.LOGOUT]: '/auth/logout',
  [authRouter.USER_GET_ORDER_LIST]: '/order/user/get-all-order',
  [authRouter.USER_GET_ORDER]: '/order/user/get-order/:orderId([0-9]+)',
  [authRouter.USER_CREATE_ORDER]: '/order/user/create-order',
  [authRouter.USER_MAKE_PAYMENT]: '/payment/user/make-payment',
  [authRouter.CREATE_RATING]:
    '/rating/product/:productId([0-9]+)/rating/:rating([1-5])',
};

export const authRouterConfig: Record<authRouter, RouteProps> = {
  [authRouter.REFRESH]: { path: authRoutePath.refresh },
  [authRouter.CHECK]: { path: authRoutePath.check },
  [authRouter.LOGOUT]: { path: authRoutePath.logout },
  [authRouter.USER_GET_ORDER_LIST]: { path: authRoutePath.user_get_order_list },
  [authRouter.USER_GET_ORDER]: { path: authRoutePath.user_get_order },
  [authRouter.USER_CREATE_ORDER]: { path: authRoutePath.user_create_order },
  [authRouter.USER_MAKE_PAYMENT]: { path: authRoutePath.user_make_payment },
  [authRouter.CREATE_RATING]: { path: authRoutePath.create_rating },
};
