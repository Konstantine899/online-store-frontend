export enum authRouter {
  REFRESH = 'refresh',
  CHECK = 'check',
  LOGOUT = 'logout',
  USER_GET_ORDER_LIST = 'user_get_order_list',
  USER_GET_ORDER = 'user_get_order',
  USER_CREATE_ORDER = 'user_create_order',
  USER_MAKE_PAYMENT = 'user_make_payment',
  CREATE_RATING = 'create_rating',
  NOT_FOUND = 'not_found',
}

export const getRouteRefreshToken = () => `/auth/refresh`;
export const getRouteAuthCheck = () => `/auth/check`;
export const getRouteLogout = () => `/auth/logout`;
export const getRouteUserGetOrderList = () => `/order/user/get-all-order`;
export const getRouteUserGetOrder = (orderId: string) =>
  `/order/user/get-order/${orderId}`;

export const getRouteUserCreateOrder = () => `/order/user/create-order`;

export const getRouterUserMakePayment = () => `/payment/user/make-payment`;

export const getRouteCreateRating = (productId: string, rating: string) =>
  `/rating/product/${productId}/rating/${rating}`;
