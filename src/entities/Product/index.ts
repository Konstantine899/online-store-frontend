export { ProductList } from './ui/ProductList/ProductList';
export { ProductsActions, ProductsReducer } from './model/slices/ProductsSlice';
export {
  ProductsCarouselReducer,
  ProductsCarouselActions,
} from './model/slices/ProductsCarouselSlice';
export { fetchProducts } from './model/services/fetchProducts';
export { FetchProductsByBrand } from './model/services/FetchProductsByBrand';
export { FetchProductsByBrandAndCategory } from './model/services/FetchProductsByBrandAndCategory';

export { FetchProductsByCategory } from './model/services/FetchProductsByCategory';
export { fetchProductDetails } from './model/services/fetchProductDetails';
export { fetchProductsCarousel } from './model/services/fetchProductsCarousel';
export type {
  ProductsSchema,
  Product,
  ProductsListMetaData,
} from './model/types/ProductsSchema';
export { ProductListItemSkeleton } from './ui/ProductListItemSkeleton/ProductListItemSkeleton';
export { ProductListNotFound } from './ui/ProductListNotFound/ProductListNotFound';
export { ProductSearch } from './ui/ProductSearch/ProductSearch';
export { ProductSortingLimit } from './ui/ProductSortingLimit/ProductSortingLimit';
export { ProductSortingOrder } from './ui/ProductSortingOrder/ProductSortingOrder';
export { ProductTabBrand } from './ui/ProductTabBrand/ProductTabBrand';
export { ProductPreview } from './ui/ProductPreview/ProductPreview';
export { ProductHeading } from './ui/ProductHeading/ProductHeading';
export { ProductCardPrice } from './ui/ProductCardPrice/ProductCardPrice';
export { ProductSpecification } from './ui/ProductSpecification/ProductSpecification';
export { ProductPopular } from './ui/ProductPopular/ProductPopular';

export {
  getSearchSelector,
  getSortOrderSelector,
  getProductsListInitedSelector,
} from './model/selectors/getProductsSelector';
export {
  getProductsListIsLoadingSelector,
  getProductsSelector,
  getProductsListSelector,
  getLimitSelector,
  getCountSelector,
} from './model/selectors/getProductsSelector';

export type { ProductDetailsSchema } from './model/types/ProductDetailsSchema';
export type { IProductDetails } from './model/types/IProductDetails';
