//ui
export { ProductsLimit } from './ui/ProductsLimit/ProductsLimit';
export { ProductList } from './ui/ProductList/ProductList';
export { ProductListItemSkeleton } from './ui/ProductListItemSkeleton/ProductListItemSkeleton';
export { ProductListNotFound } from './ui/ProductListNotFound/ProductListNotFound';
export { ProductSearch } from './ui/ProductSearch/ProductSearch';
export { ProductSortingLimit } from '@/entities/Product/ui/deprecated/ProductSortingLimit/ProductSortingLimit';
export { ProductSortingOrder } from '@/entities/Product/ui/deprecated/ProductSortingOrder/ProductSortingOrder';
export { ProductTabBrand } from '@/entities/Product/ui/deprecated/ProductTabBrand/ProductTabBrand';
export { ProductPreview } from './ui/ProductPreview/ProductPreview';
export { ProductHeading } from './ui/ProductHeading/ProductHeading';
export { ProductCardPrice } from './ui/ProductCardPrice/ProductCardPrice';
export { ProductSpecification } from './ui/ProductSpecification/ProductSpecification';
export { ProductPopular } from './ui/ProductPopular/ProductPopular';
export { ProductsSortOrder } from '@/entities/Product/ui/ProductsSortOrder/ProductsSortOrder';
export { ProductsByCategorySortOrder } from './ui/ProductsByCategorySortOrder/ProductsByCategorySortOrder';
export { ProductsByCategoryLimit } from './ui/ProductsByCategoryLimit/ProductsByCategoryLimit';

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
export { fetchProducts } from './model/services/fetchProducts';
export { fetchProductsByBrand } from './model/services/fetchProductsByBrand';
export { fetchProductsByCategory } from './model/services/fetchProductsByCategory';
export { fetchProductsByCategoryAndBrand } from './model/services/fetchProductsByCategoryAndBrand';
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
} from './model/selectors/selectProductsByCategoryAndBrand';

// types
export type { ProductsSchema, Product } from './model/types/ProductsSchema';
export type { ProductDetailsSchema } from './model/types/ProductDetailsSchema';
export type { ProductsByCategoryCarouselSchema } from './model/types/ProductsByCategoryCarouselSchema';
