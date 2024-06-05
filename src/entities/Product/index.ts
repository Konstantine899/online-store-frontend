//ui
export { ProductList } from './ui/ProductList/ProductList';
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

//services
export { fetchProducts } from './model/services/fetchProducts';
export { fetchProductsByBrand } from './model/services/fetchProductsByBrand';
export { fetchProductsByCategory } from './model/services/fetchProductsByCategory';
export { FetchProductsByBrandAndCategory } from './model/services/FetchProductsByBrandAndCategory';
export { fetchProductDetails } from './model/services/fetchProductDetails';
export { fetchProductsCarousel } from './model/services/fetchProductsCarousel';

// selectors
export {
  selectLastPage,
  selectSortOrder,
  selectSearch,
  selectProductsInited,
  selectCount,
  selectProductsState,
  selectProducts,
  selectProductsIsLoading,
  selectLimit,
  selectCurrentPage,
  selectNextPage,
  selectPreviosPage,
  selectMetaData,
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
} from './model/selectors/selectProductsByCategoryState';

// types
export type { ProductsSchema } from './model/types/ProductsSchema';
export type { ProductDetailsSchema } from './model/types/ProductDetailsSchema';
export type { ProductsByCategoryCarouselSchema } from './model/types/ProductsByCategoryCarouselSchema';
