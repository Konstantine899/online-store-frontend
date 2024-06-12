// api
export {
  useProducts,
  useProductsByCategoryAndBrand,
  useProductsByCategory,
} from './api/productsApi';

//ui
export { ProductsLimit } from './ui/ProductsLimit/ProductsLimit';
export { ProductList } from './ui/ProductList/ProductList';
export { ProductListItemSkeleton } from './ui/ProductListItemSkeleton/ProductListItemSkeleton';
export { ProductListNotFound } from './ui/ProductListNotFound/ProductListNotFound';
export { ProductSearch } from './ui/ProductSearch/ProductSearch';
export { ProductPreview } from './ui/ProductPreview/ProductPreview';
export { ProductHeading } from './ui/ProductHeading/ProductHeading';
export { ProductCardPrice } from './ui/ProductCardPrice/ProductCardPrice';
export { ProductSpecification } from './ui/ProductSpecification/ProductSpecification';
export { ProductPopular } from './ui/ProductPopular/ProductPopular';
export { ProductsSortOrder } from '@/entities/Product/ui/ProductsSortOrder/ProductsSortOrder';
export { ProductsByCategorySortOrder } from './ui/ProductsByCategorySortOrder/ProductsByCategorySortOrder';
export { ProductsByCategoryLimit } from './ui/ProductsByCategoryLimit/ProductsByCategoryLimit';
export { ProductsByCategoryAndBrandSortOrder } from './ui/ProductsByCategoryAndBrandSortOrder/ProductsByCategoryAndBrandSortOrder';
export { ProductsByCategoryAndBrandLimit } from './ui/ProductsByCategoryAndBrandLimit/ProductsByCategoryAndBrandLimit';

//slices
export { ProductsActions, ProductsReducer } from './model/slices/ProductsSlice';
export {
  ProductsCarouselActions,
  ProductsCarouselReducer,
} from './model/slices/ProductsCarouselSlice';
export {
  ProductDetailsReducer,
  ProductDetailsPageActions,
} from './model/slices/ProductDetailsSlice';
export { ProductsByCategoryCarouselReducer } from './model/slices/ProductsByCategoryCarouselSlice';
export {
  ProductsByCategoryReducer,
  ProductsByCategoryActions,
} from './model/slices/ProductsByCategorySlice';
export {
  ProductsByCategoryAndBrandActions,
  ProductsByCategoryAndBrandReducer,
} from './model/slices/ProductsByCategoryAndBrandSlice';

//services
export { fetchProductDetails } from './model/services/fetchProductDetails';
export { fetchProductsCarousel } from './model/services/fetchProductsCarousel';

// selectors
export {
  selectProductsLastPage,
  selectProductsSortOrder,
  selectProductsSearch,
  selectProductsInited,
  selectProductsCount,
  selectProductsState,
  selectProducts,
  selectProductsIsLoading,
  selectProductsLimit,
  selectProductsCurrentPage,
  selectProductsNextPage,
  selectProductsPreviosPage,
  selectProductsMetaData,
} from '@/entities/Product/model/selectors/selectProducts';

export {
  selectProductsByCategoryIsLoading,
  selectProductsByCategoryState,
  selectProductsByCategoryCount,
  selectProductsByCategory,
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryInited,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
  selectProductsByCategoryLastPage,
} from './model/selectors/selectProductsByCategory';

export {
  selectProductsByCategoryAndBrandIsLoading,
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandInited,
  selectProductsByCategoryAndBrand,
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandCount,
  selectProductsByCategoryAndBrandSort,
  selectProductsByCategoryAndBrandState,
  selectProductsByCategoryAndBrandLastPage,
} from './model/selectors/selectProductsByCategoryAndBrand';

// types
export type { ProductsSchema, Product } from './model/types/ProductsSchema';
export type { ProductDetailsSchema } from './model/types/ProductDetailsSchema';
export type { ProductsByCategoryCarouselSchema } from './model/types/ProductsByCategoryCarouselSchema';
