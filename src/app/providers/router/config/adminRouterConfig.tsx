import { RouteProps } from 'react-router-dom';
import {
  adminRouter,
  getAdminCreateProductProperty,
  getAdminListRoles,
  getAdminRouteAllOrders,
  getAdminRouteAllOrdersUser,
  getAdminRouteCreateBrand,
  getAdminRouteCreateCategory,
  getAdminRouteCreateOrder,
  getAdminRouteCreateProduct,
  getAdminRouteCreateRole,
  getAdminRouteCreateUser,
  getAdminRouteGetRole,
  getAdminRouteGetListUsers,
  getAdminRouteOrder,
  getAdminRouteRemoveBrand,
  getAdminRouteRemoveCategory,
  getAdminRouteRemoveOrder,
  getAdminRouteRemoveProduct,
  getAdminRouteRemoveProductProperty,
  getAdminRouteUpdateBrand,
  getAdminRouteUpdateCategory,
  getAdminRouteUpdateProduct,
  getAdminRouteUpdateProductProperty,
  getAdminRouteGetUser,
  getAdminRouteUpdateUser,
  getAdminRouteRemoveUser,
  getAdminRouteAddUserRole,
  getAdminRouteRemoveUserRole,
} from '@/shared/consts/router/adminRouter';
import { ProductListNotFound } from '@/entities/Product';

export const adminRouterConfig: Record<adminRouter, RouteProps> = {
  [adminRouter.CREATE_BRAND]: { path: getAdminRouteCreateBrand() },
  [adminRouter.UPDATE_BRAND]: { path: getAdminRouteUpdateBrand(':id') },
  [adminRouter.REMOVE_BRAND]: { path: getAdminRouteRemoveBrand(':id') },
  [adminRouter.CREATE_CATEGORY]: { path: getAdminRouteCreateCategory() },
  [adminRouter.UPDATE_CATEGORY]: { path: getAdminRouteUpdateCategory(':id') },
  [adminRouter.REMOVE_CATEGORY]: { path: getAdminRouteRemoveCategory(':id') },
  [adminRouter.ADMIN_GET_ALL_ORDER]: { path: getAdminRouteAllOrders() },
  [adminRouter.ADMIN_GET_ALL_ORDER_USER]: {
    path: getAdminRouteAllOrdersUser(':userId'),
  },
  [adminRouter.ADMIN_GET_ORDER]: { path: getAdminRouteOrder(':userId') },
  [adminRouter.ADMIN_CREATE_ORDER]: { path: getAdminRouteCreateOrder() },
  [adminRouter.ADMIN_REMOVE_ORDER]: {
    path: getAdminRouteRemoveOrder(':orderId'),
  },
  [adminRouter.CREATE_PRODUCT_PROPERTY]: {
    path: getAdminCreateProductProperty(':productId'),
  },
  [adminRouter.UPDATE_PRODUCT_PROPERTY]: {
    path: getAdminRouteUpdateProductProperty(':productId', ':id'),
  },
  [adminRouter.REMOVE_PRODUCT_PROPERTY]: {
    path: getAdminRouteRemoveProductProperty(':productId', ':id'),
  },
  [adminRouter.CREATE_PRODUCT]: { path: getAdminRouteCreateProduct() },
  [adminRouter.UPDATE_PRODUCT]: {
    path: getAdminRouteUpdateProduct(':id'),
  },
  [adminRouter.REMOVE_PRODUCT]: {
    path: getAdminRouteRemoveProduct(':id'),
  },
  [adminRouter.CREATE_ROLE]: { path: getAdminRouteCreateRole() },
  [adminRouter.GET_ROLE]: { path: getAdminRouteGetRole(':role') },
  [adminRouter.GET_LIST_ROLES]: { path: getAdminListRoles() },
  [adminRouter.CREATE_USER]: { path: getAdminRouteCreateUser() },
  [adminRouter.GET_LIST_USERS]: { path: getAdminRouteGetListUsers() },
  [adminRouter.GET_USER]: { path: getAdminRouteGetUser(':id') },
  [adminRouter.UPDATE_USER]: { path: getAdminRouteUpdateUser(':id') },
  [adminRouter.REMOVE_USER]: { path: getAdminRouteRemoveUser(':id') },
  [adminRouter.ADD_USER_ROLE]: { path: getAdminRouteAddUserRole() },
  [adminRouter.REMOVE_USER_ROLE]: { path: getAdminRouteRemoveUserRole() },
  [adminRouter.NOT_FOUND]: {
    path: '*',
    element: (
      <ProductListNotFound
        message={'К сожалению запрашиваемая вами страница не найдена'}
      />
    ),
  },
};
