// api
export {
  useProducts,
  useProductsByCategoryAndBrand,
  useProductsByCategory,
  useFetchProductsByCategoryCarousel,
} from './api/productsApi';
export { useProduct } from './api/productApi';

//ui
export { ProductsLimit } from './ui/ProductsLimit/ProductsLimit';
export { ProductList } from '@/entities/Product/ui/deprecated/ProductList/ProductList';
export { ProductListItemSkeleton } from './ui/ProductListItemSkeleton/ProductListItemSkeleton';
export { ProductListNotFound } from './ui/ProductListNotFound/ProductListNotFound';
export { ProductSearch } from './ui/ProductSearch/ProductSearch';
export { Product } from './ui/Product/Product';
export { ProductHeading } from './ui/ProductHeading/ProductHeading';
export { ProductCardPrice } from './ui/ProductCardPrice/ProductCardPrice';
export { ProductSpecification } from './ui/ProductSpecification/ProductSpecification';
export { ProductsSortOrder } from '@/entities/Product/ui/ProductsSortOrder/ProductsSortOrder';
export { ProductsByCategorySortOrder } from './ui/ProductsByCategorySortOrder/ProductsByCategorySortOrder';
export { ProductsByCategoryLimit } from './ui/ProductsByCategoryLimit/ProductsByCategoryLimit';
export { ProductsByCategoryAndBrandSortOrder } from './ui/ProductsByCategoryAndBrandSortOrder/ProductsByCategoryAndBrandSortOrder';
export { ProductsByCategoryAndBrandLimit } from './ui/ProductsByCategoryAndBrandLimit/ProductsByCategoryAndBrandLimit';
export { ProductsCount } from './ui/ProductsCount/ProductsCount';
export { ProductsByCategoryCount } from './ui/ProductsByCategoryCount/ProductsByCategoryCount';
export { ProductsByCategoryAndBrandCount } from './ui/ProductsByCategoryAndBrandCount/ProductsByCategoryAndBrandCount';

//slices
export { ProductsActions, ProductsReducer } from './model/slices/ProductsSlice';
export {
  ProductDetailsReducer,
  ProductDetailsPageActions,
} from './model/slices/ProductDetailsSlice';
export {
  ProductsByCategoryReducer,
  ProductsByCategoryActions,
} from './model/slices/ProductsByCategorySlice';
export {
  ProductsByCategoryAndBrandActions,
  ProductsByCategoryAndBrandReducer,
} from './model/slices/ProductsByCategoryAndBrandSlice';

// selectors
export {
  selectProductsLastPage,
  selectProductsSortOrder,
  selectProductsSearch,
  selectProductsCount,
  selectProductsState,
  selectProducts,
  selectProductsLimit,
  selectProductsCurrentPage,
  selectProductsNextPage,
  selectProductsPreviosPage,
  selectProductsMetaData,
} from '@/entities/Product/model/selectors/selectProducts';

export {
  selectProductsByCategoryState,
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
  selectProductsByCategoryLastPage,
} from './model/selectors/selectProductsByCategory';

export {
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrand,
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandCount,
  selectProductsByCategoryAndBrandSort,
  selectProductsByCategoryAndBrandState,
  selectProductsByCategoryAndBrandLastPage,
} from './model/selectors/selectProductsByCategoryAndBrand';

// types
export type { IProductsSchema, TProduct } from './model/types/IProductsSchema';
export type { IProduct } from './model/types/IProduct';
