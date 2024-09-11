// api
export {
  useProducts,
  useProductsByCategoryAndBrand,
  useProductsByCategory,
  useFetchProductsByCategoryCarousel,
} from './api/productsApi';
export { useProduct } from './api/productApi';

// lib
export {
  useProductsContext,
  ProductsProvider,
} from './lib/contexts/ProductsContext';
export {
  useProductsByCategoryContext,
  ProductsByCategoryProvider,
} from './lib/contexts/ProductsByCategoryContext';
export {
  ProductsByCategoryAndBrandProvider,
  useProductsByCategoryAndBrandContext,
} from './lib/contexts/ProductsByCategoryAndBrandContext';
export {
  ProductProvider,
  useProductContext,
} from './lib/contexts/ProductContext';
export { useProductsSortOrder } from './lib/hooks/useProductsSortOrder';
export { useProductsLimit } from './lib/hooks/useProductsLimit';
export { useAddLimitToUrlParam } from './lib/hooks/useAddLimitToUrlParam';
export { useAddSortOrderToUrlParam } from './lib/hooks/useAddSortOrderToUrlParam';
export { useAddCurrentPageToUrlParam } from './lib/hooks/useAddCurrentPageToUrlParam';
export { useAddSearchToUrlParam } from './lib/hooks/useAddSearchToUrlParam';

//ui
export { Products } from './ui/Products/Products';
export { ProductsByCategory } from './ui/ProductsByCategory/ProductsByCategory';
export { ProductsByCategoryAndBrand } from './ui/ProductsByCategoryAndBrand/ProductsByCategoryAndBrand';
export { ProductCardSkeleton } from './ui/ProductCardSkeleton/ProductCardSkeleton';
export { ProductsNotFound } from '@/entities/Product/ui/ProductsNotFound/ProductsNotFound';
export { ProductSearch } from './ui/ProductSearch/ProductSearch';
export { Product } from './ui/Product/Product';
export { ProductHeading } from './ui/ProductHeading/ProductHeading';
export { ProductSpecification } from './ui/ProductSpecification/ProductSpecification';
export { ProductsByCategoryAndBrandPaginate } from './ui/ProductsByCategoryAndBrandPaginate/ProductsByCategoryAndBrandPaginate';
export { ProductsByCategoryPaginate } from './ui/ProductsByCategoryPaginate/ProductsByCategoryPaginate';

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
  selectProductsState,
  selectProductsLimit,
  selectProductsCurrentPage,
  selectProductsMetaData,
} from './model/selectors/selectProducts';

export {
  selectProductsByCategoryState,
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
  selectProductsByCategoryLastPage,
} from './model/selectors/selectProductsByCategory';

export {
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandSort,
  selectProductsByCategoryAndBrandState,
  selectProductsByCategoryAndBrandLastPage,
} from './model/selectors/selectProductsByCategoryAndBrand';

// types
export type {
  IProductsSchema,
  TProduct,
  TSortOrder,
  TSortLimit,
} from './model/types/IProductsSchema';
export type { IProduct } from './model/types/IProduct';
