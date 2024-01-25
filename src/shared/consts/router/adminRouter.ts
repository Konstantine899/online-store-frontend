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
  NOT_FOUND = 'not_found',
}

export const getAdminRouteCreateBrand = () => `/brand/create/`;
export const getAdminRouteUpdateBrand = (id: string) => `/brand/update/${id}`;
export const getAdminRouteRemoveBrand = (id: string) => `/brand/delete/${id}`;
export const getAdminRouteCreateCategory = () => `/category/create/`;
export const getAdminRouteUpdateCategory = (id: string) =>
  `/category/update/${id}`;
export const getAdminRouteRemoveCategory = (id: string) =>
  `/category/delete/${id}`;
export const getAdminRouteAllOrders = () => `/order/admin/get-all-order`;
export const getAdminRouteAllOrdersUser = (userId: string) =>
  `/order/admin/get-all-order/user/${userId}`;

export const getAdminRouteOrder = (userId: string) =>
  `/order/admin/get-order/${userId}`;

export const getAdminRouteCreateOrder = () => `/order/admin/create-order`;
export const getAdminRouteRemoveOrder = (orderId: string) =>
  `/order/admin/delete-order/${orderId}`;

export const getAdminCreateProductProperty = (productId: string) =>
  `/product-property/product_id/${productId}/create`;

export const getAdminRouteUpdateProductProperty = (
  productId: string,
  id: string,
) => `/product-property/product_id/${productId}/update_property/${id}`;

export const getAdminRouteRemoveProductProperty = (
  productId: string,
  id: string,
) => `/product-property/product_id/${productId}/remove-product-property/${id}`;

export const getAdminRouteCreateProduct = () => `/product/create`;
export const getAdminRouteUpdateProduct = (id: string) =>
  `/product/update/${id}`;

export const getAdminRouteRemoveProduct = (id: string) =>
  `/product/delete/${id}`;

export const getAdminRouteCreateRole = () => `/role/create`;
export const getAdminRouteGetRole = (role: string) => `/role/one/${role}`;
export const getAdminListRoles = () => `/role/list`;
export const getAdminRouteCreateUser = () => `/user/create`;
export const getAdminRouteGetListUsers = () => `/user/get-list-users`;
export const getAdminRouteGetUser = (id: string) => `/user/${id}`;
export const getAdminRouteUpdateUser = (id: string) => `/user/update/${id}`;
export const getAdminRouteRemoveUser = (id: string) => `/user/delete/${id}`;
export const getAdminRouteAddUserRole = () => `/user/role/add`;
export const getAdminRouteRemoveUserRole = () => `/user/role/delete`;
