export enum publicRouter {
  MAIN = 'main',
  SIGN_UP = 'sign_up',
  AUTH = 'auth',
  GET_LIST_ALL_BRANDS = 'get_list_all_brands',
  GET_LIST_ALL_BRANDS_BY_CATEGORY = 'get_list_all_brands_by_category',
  GET_BRAND = 'get_brand',
  GET_CART = 'get_cart',
  APPEND_TO_CART = 'append_to_cart',
  INCREASE_IN_THE_QUANTITY_IN_THE_CART = 'increase_in_the_quantity_in_the_cart',
  DECREASE_IN_THE_QUANTITY_IN_THE_CART = 'decrease_in_the_quantity_in_the_cart',
  REMOVE_PRODUCT_FROM_CART = 'remove_product_from_cart',
  CLEAR_CART = 'clear_cart',
  GET_LIST_ALL_CATEGORIES = 'get_list_all_categories',
  GET_CATEGORY = 'get_category',
  GUEST_CREATE_ORDER = 'guest_create_order',
  GUEST_MAKE_PAYMENT = 'guest_make_payment',
  GET_PRODUCT_PROPERTY = 'get_product_property',
  GET_LIST_PRODUCT_PROPERTY = 'get_list_product_property',
  GET_PRODUCT = 'get_product',
  GET_LIST_PRODUCT = 'get_list_product',
  GET_LIST_PRODUCT_BY_BRAND_ID = 'get_list_product_by_brand_id',
  GET_LIST_PRODUCT_BY_CATEGORY_ID = 'get_list_product_by_category_id',
  GET_LIST_PRODUCT_BY_BRAND_ID_AND_CATEGORY_ID = 'get_list_product_by_brand_id_and_category_id',
  GET_RATING = 'get_rating',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSingUp = () => '/auth/registration';
export const getRouteAuth = () => '/auth/login';
export const getRouteAllBrands = () => '/brand/brands';
export const getRouteAllBrandsByCategory = (categoryId: string) =>
  `/brand/brand_list_by_category/${categoryId}`;
export const getRouteBrand = (id: string) => `/brand/${id}`;

export const getRouteCart = () => `/cart/get-cart`;
export const getRouteAppendToCart = (productId: string, quantity: string) =>
  `/cart/product/${productId}/append/${quantity}`;
export const getRouteIncreaseInTheQuantityInTheCart = (
  productId: string,
  quantity: string,
) => `/cart/product/${productId}/increment/${quantity}`;

export const getRouteDecreaseInTheQuantityInTheCart = (
  productId: string,
  quantity: string,
) => `/cart/product/${productId}/decrement/${quantity}`;

export const getRouteRemoveProductFromCart = (productId: string) =>
  `/cart/product/${productId}/remove`;

export const getRouteClearCart = () => `/cart/clear`;

export const getRouteListAllCategories = () => `/category/categories`;
export const getRouteCategory = (id: string) => `/category/one/${id}`;

export const getRouteGuestCreateOrder = () => `/order/guest/create-order`;

export const getRouteGuestMakePayment = () => `/payment/guest/make-payment`;

export const getRouterProductProperty = (productId: string, id: string) =>
  `/product-property/product_id/${productId}/get-property/${id}`;

export const getRouteListProductProperty = (productId: string) =>
  `/product-property/product_id/${productId}/properties`;
export const getRouteProduct = (id: string) => `/product/one/${id}`;
export const getRouteListProducts = () => `/product/all`;

export const getRouteListProductsByBrand = (brandId: string) =>
  `/product/all/brandId/${brandId}`;

export const getRouteListProductsByCategory = (categoryId: string) =>
  `/product/all/categoryId/${categoryId}`;

export const getRouteListProductsByBrandAndByCategory = (
  brandId: string,
  categoryId: string,
) => `/product/all/brandId/${brandId}/categoryId/${categoryId}`;

export const getRouteRating = (productId: string) =>
  `/rating/product/${productId}`;
