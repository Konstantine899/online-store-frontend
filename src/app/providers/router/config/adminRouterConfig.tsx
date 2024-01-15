import { RouteProps } from 'react-router-dom';

export enum adminRouter {
  CREATE_BRAND = 'create_brand',
  UPDATE_BRAND = 'update_brand',
  REMOVE_BRAND = 'remove_brand',
  CREATE_CATEGORY = 'create_category',
  UPDATE_CATEGORY = 'update_category',
  REMOVE_CATEGORY = 'remove_category',
  ADMIN_GET_ALL_ORDER = 'admin_get_all_order',
  ADMIN_GET_ALL_ORDER_USER = 'admin_get_all_order_user',
  ADMIN_GET_ORDER = 'admin_get_order',
  ADMIN_CREATE_ORDER = 'admin_create_order',
  ADMIN_REMOVE_ORDER = 'admin_remove_order',
  CREATE_PRODUCT_PROPERTY = 'create_product_property',
  UPDATE_PRODUCT_PROPERTY = 'update_product_property',
  REMOVE_PRODUCT_PROPERTY = 'remove_product_property',
  CREATE_PRODUCT = 'create_product',
  UPDATE_PRODUCT = 'update_product',
  REMOVE_PRODUCT = 'remove_product',
  CREATE_ROLE = 'create_role',
  GET_ROLE = 'get_role',
  GET_LIST_ROLES = 'get_list_roles',
  CREATE_USER = 'create_user',
  GET_LIST_USERS = 'get_list_users',
  GET_USER = 'get_user',
  UPDATE_USER = 'update_user',
  REMOVE_USER = 'remove_user',
  ADD_USER_ROLE = 'add_user_role',
  REMOVE_USER_ROLE = 'remove_user_role',
}

export const adminRoutePath: Record<adminRouter, string> = {
  [adminRouter.CREATE_BRAND]: '/brand/create',
  [adminRouter.UPDATE_BRAND]: '/brand/update/',
  [adminRouter.REMOVE_BRAND]: '/brand/delete/',
  [adminRouter.CREATE_CATEGORY]: '/category/create',
  [adminRouter.UPDATE_CATEGORY]: '/category/update/',
  [adminRouter.REMOVE_CATEGORY]: '/category/delete/',
  [adminRouter.ADMIN_GET_ALL_ORDER]: '/order/admin/get-all-order',
  [adminRouter.ADMIN_GET_ALL_ORDER_USER]: '/order/admin/get-all-order/user/',
  [adminRouter.ADMIN_GET_ORDER]: '/order/admin/get-order/',
  [adminRouter.ADMIN_CREATE_ORDER]: '/order/admin/create-order',
  [adminRouter.ADMIN_REMOVE_ORDER]: '/order/admin/delete-order/',
  [adminRouter.CREATE_PRODUCT_PROPERTY]: '/product-property/product_id/',
  [adminRouter.UPDATE_PRODUCT_PROPERTY]: '/product-property/product_id/',
  [adminRouter.REMOVE_PRODUCT_PROPERTY]: '/product-property/product_id/',
  [adminRouter.CREATE_PRODUCT]: '/product/create',
  [adminRouter.UPDATE_PRODUCT]: '/product/update/',
  [adminRouter.REMOVE_PRODUCT]: '/product/delete/',
  [adminRouter.CREATE_ROLE]: '/role/create',
  [adminRouter.GET_ROLE]: '/role/one/',
  [adminRouter.GET_LIST_ROLES]: '/role/list',
  [adminRouter.CREATE_USER]: '/user/create',
  [adminRouter.GET_LIST_USERS]: '/user/get-list-users',
  [adminRouter.GET_USER]: '/user/',
  [adminRouter.UPDATE_USER]: '/user/update/',
  [adminRouter.REMOVE_USER]: '/user/delete/',
  [adminRouter.ADD_USER_ROLE]: '/user/role/add',
  [adminRouter.REMOVE_USER_ROLE]: '/user/role/delete',
};

export const adminRouterConfig: Record<adminRouter, RouteProps> = {
  [adminRouter.CREATE_BRAND]: { path: adminRoutePath.create_brand },
  [adminRouter.UPDATE_BRAND]: {
    path: `${adminRoutePath.update_brand}:id`,
  },
  [adminRouter.REMOVE_BRAND]: {
    path: `${adminRoutePath.remove_brand}:id`,
  },
  [adminRouter.CREATE_CATEGORY]: { path: adminRoutePath.create_category },
  [adminRouter.UPDATE_CATEGORY]: {
    path: `${adminRoutePath.update_category}:id`,
  },
  [adminRouter.REMOVE_CATEGORY]: {
    path: `${adminRoutePath.remove_category}:id`,
  },
  [adminRouter.ADMIN_GET_ALL_ORDER]: {
    path: adminRoutePath.admin_get_all_order,
  },
  [adminRouter.ADMIN_GET_ALL_ORDER_USER]: {
    path: `${adminRoutePath.admin_get_all_order_user}:userId`,
  },
  [adminRouter.ADMIN_GET_ORDER]: {
    path: `${adminRoutePath.admin_get_order}:orderId`,
  },
  [adminRouter.ADMIN_CREATE_ORDER]: { path: adminRoutePath.admin_create_order },
  [adminRouter.ADMIN_REMOVE_ORDER]: {
    path: `${adminRoutePath.admin_remove_order}:orderId`,
  },
  [adminRouter.CREATE_PRODUCT_PROPERTY]: {
    path: `${adminRoutePath.create_product_property}:productId/create`,
  },
  [adminRouter.UPDATE_PRODUCT_PROPERTY]: {
    path: `${adminRoutePath.update_product_property}:productId/update_property/:id`,
  },
  [adminRouter.REMOVE_PRODUCT_PROPERTY]: {
    path: `${adminRoutePath.remove_product_property}:productId/remove-product-property/:id`,
  },
  [adminRouter.CREATE_PRODUCT]: { path: adminRoutePath.create_product },
  [adminRouter.UPDATE_PRODUCT]: {
    path: `${adminRoutePath.update_product}:id`,
  },
  [adminRouter.REMOVE_PRODUCT]: {
    path: `${adminRoutePath.remove_product}:id`,
  },
  [adminRouter.CREATE_ROLE]: { path: adminRoutePath.create_role },
  [adminRouter.GET_ROLE]: { path: `${adminRoutePath.get_role}:role` },
  [adminRouter.GET_LIST_ROLES]: { path: adminRoutePath.get_list_roles },
  [adminRouter.CREATE_USER]: { path: adminRoutePath.create_user },
  [adminRouter.GET_LIST_USERS]: { path: adminRoutePath.get_list_users },
  [adminRouter.GET_USER]: { path: `${adminRoutePath.get_user}:id` },
  [adminRouter.UPDATE_USER]: { path: `${adminRoutePath.update_user}:id` },
  [adminRouter.REMOVE_USER]: { path: `${adminRoutePath.remove_user}:id` },
  [adminRouter.ADD_USER_ROLE]: { path: adminRoutePath.add_user_role },
  [adminRouter.REMOVE_USER_ROLE]: { path: adminRoutePath.remove_user_role },
};
