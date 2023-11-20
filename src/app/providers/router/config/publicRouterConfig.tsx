import { RouteProps } from "react-router-dom";
import { MainPageAsync as MainPage } from "@/pages/MainPage/MainPage.async";

export enum publicRouter {
  MAIN = "main",
  SIGN_UP = "sign_up",
  AUTH = "auth",
  GET_LIST_ALL_BRANDS = "get_list_all_brands",
  GET_BRAND = "get_brand",
  GET_CART = "get_cart",
  APPEND_TO_CART = "append_to_cart",
  INCREASE_IN_THE_QUANTITY_IN_THE_CART = "increase_in_the_quantity_in_the_cart",
  DECREASE_IN_THE_QUANTITY_IN_THE_CART = "decrease_in_the_quantity_in_the_cart",
  REMOVE_PRODUCT_FROM_CART = "remove_product_from_cart",
  CLEAR_CART = "clear_cart",
  GET_LIST_ALL_CATEGORIES = "get_list_all_categories",
  GET_CATEGORY = "get_category",
  GUEST_CREATE_ORDER = "guest_create_order",
  GUEST_MAKE_PAYMENT = "guest_make_payment",
  GET_PRODUCT_PROPERTY = "get_product_property",
  GET_LIST_PRODUCT_PROPERTY = "get_list_product_property",
  GET_PRODUCT = "get_product",
  GET_LIST_PRODUCT = "get_list_product",
  GET_LIST_PRODUCT_BY_BRAND_ID = "get_list_product_by_brand_id",
  GET_LIST_PRODUCT_BY_CATEGORY_ID = "get_list_product_by_category_id",
  GET_LIST_PRODUCT_BY_BRAND_ID_AND_CATEGORY_ID = "get_list_product_by_brand_id_and_category_id",
  GET_RATING = "get_rating",
}

export const publicRoutePath: Record<publicRouter, string> = {
  [publicRouter.MAIN]: "/",
  [publicRouter.SIGN_UP]: "/auth/registration",
  [publicRouter.AUTH]: "/auth/login",
  [publicRouter.GET_LIST_ALL_BRANDS]: "/brand/brands",
  [publicRouter.GET_BRAND]: "/brand/one/:id([0-9]+)",
  [publicRouter.GET_CART]: "/cart/get-cart",
  [publicRouter.APPEND_TO_CART]:
    "/cart/product/:productId([0-9]+)/append/:quantity([0-9]+)",
  [publicRouter.INCREASE_IN_THE_QUANTITY_IN_THE_CART]:
    "/cart/product/:productId([0-9]+)/increment/:quantity([0-9]+)",
  [publicRouter.DECREASE_IN_THE_QUANTITY_IN_THE_CART]:
    "/cart/product/:productId([0-9]+)/decrement/:quantity([0-9]+)",
  [publicRouter.REMOVE_PRODUCT_FROM_CART]:
    "/cart/product/:productId([0-9]+)/remove",
  [publicRouter.CLEAR_CART]: "/cart/clear",
  [publicRouter.GET_LIST_ALL_CATEGORIES]: "/category/categories",
  [publicRouter.GET_CATEGORY]: "/category/one/:id([0-9]+)",
  [publicRouter.GUEST_CREATE_ORDER]: "/order/guest/create-order",
  [publicRouter.GUEST_MAKE_PAYMENT]: "/payment/guest/make-payment",
  [publicRouter.GET_PRODUCT_PROPERTY]:
    "/product-property/product_id/:productId([0-9]+)/get-property/:id([0-9]+)",
  [publicRouter.GET_LIST_PRODUCT_PROPERTY]:
    "/product-property/product_id/:productId([0-9]+)/properties",
  [publicRouter.GET_PRODUCT]: "/product/one/:id([0-9]+)",
  [publicRouter.GET_LIST_PRODUCT]: "/product/all",
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID]:
    "/product/all/brandId/:brandId([0-9]+)",
  [publicRouter.GET_LIST_PRODUCT_BY_CATEGORY_ID]:
    "/product/all/categoryId/:categoryId([0-9]+)",
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID_AND_CATEGORY_ID]:
    "/product/all/brandId/:brandId([0-9]+)/categoryId/:categoryId([0-9]+)",
  [publicRouter.GET_RATING]: "/rating/product/:productId([0-9]+)",
};

export const publicRouterConfig: Record<publicRouter, RouteProps> = {
  [publicRouter.MAIN]: { path: publicRoutePath.main, element: <MainPage /> },
  [publicRouter.SIGN_UP]: { path: publicRoutePath.sign_up },
  [publicRouter.AUTH]: { path: publicRoutePath.auth },
  [publicRouter.GET_LIST_ALL_BRANDS]: {
    path: publicRoutePath.get_list_all_brands,
  },
  [publicRouter.GET_BRAND]: { path: publicRoutePath.get_brand },
  [publicRouter.GET_CART]: { path: publicRoutePath.get_cart },
  [publicRouter.APPEND_TO_CART]: { path: publicRoutePath.append_to_cart },
  [publicRouter.INCREASE_IN_THE_QUANTITY_IN_THE_CART]: {
    path: publicRoutePath.increase_in_the_quantity_in_the_cart,
  },
  [publicRouter.DECREASE_IN_THE_QUANTITY_IN_THE_CART]: {
    path: publicRoutePath.decrease_in_the_quantity_in_the_cart,
  },
  [publicRouter.REMOVE_PRODUCT_FROM_CART]: {
    path: publicRoutePath.remove_product_from_cart,
  },
  [publicRouter.CLEAR_CART]: { path: publicRoutePath.clear_cart },
  [publicRouter.GET_LIST_ALL_CATEGORIES]: {
    path: publicRoutePath.get_list_all_categories,
  },
  [publicRouter.GET_CATEGORY]: { path: publicRoutePath.get_category },
  [publicRouter.GUEST_CREATE_ORDER]: {
    path: publicRoutePath.guest_create_order,
  },
  [publicRouter.GUEST_MAKE_PAYMENT]: {
    path: publicRoutePath.guest_make_payment,
  },
  [publicRouter.GET_PRODUCT_PROPERTY]: {
    path: publicRoutePath.get_product_property,
  },
  [publicRouter.GET_LIST_PRODUCT_PROPERTY]: {
    path: publicRoutePath.get_list_product_property,
  },
  [publicRouter.GET_PRODUCT]: { path: publicRoutePath.get_product },
  [publicRouter.GET_LIST_PRODUCT]: { path: publicRoutePath.get_list_product },
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID]: {
    path: publicRoutePath.get_list_product_by_brand_id,
  },
  [publicRouter.GET_LIST_PRODUCT_BY_CATEGORY_ID]: {
    path: publicRoutePath.get_list_product_by_category_id,
  },
  [publicRouter.GET_LIST_PRODUCT_BY_BRAND_ID_AND_CATEGORY_ID]: {
    path: publicRoutePath.get_list_product_by_brand_id_and_category_id,
  },
  [publicRouter.GET_RATING]: { path: publicRoutePath.get_rating },
};