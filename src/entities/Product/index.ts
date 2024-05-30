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
export { ProductsActions } from './model/slices/ProductsSlice';
export {
  ProductsCarouselActions,
  ProductsCarouselReducer,
} from './model/slices/ProductsCarouselSlice';
export { entityProductReducers } from './model/slices';

//services
export { fetchProducts } from './model/services/fetchProducts';
export { FetchProductsByBrand } from './model/services/FetchProductsByBrand';
export { FetchProductsByCategory } from './model/services/FetchProductsByCategory';
export { FetchProductsByBrandAndCategory } from './model/services/FetchProductsByBrandAndCategory';
export { fetchProductDetails } from './model/services/fetchProductDetails';
export { fetchProductsCarousel } from './model/services/fetchProductsCarousel';

// selectors
export {
  selectProductsIsLoading,
  selectProductsState,
  selectProducts,
  selectSortOrder,
  selectSearch,
  selectProductsInited,
  selectCount,
} from './model/selectors/selectProducts';

// types
export type { ProductsSchema } from './model/types/ProductsSchema';
export type { EntityProductSchema } from './model/types';
export { selectLastPage } from '@/entities/Product/model/selectors/selectProducts';
export { selectPreviosPage } from '@/entities/Product/model/selectors/selectProducts';
export { selectNextPage } from '@/entities/Product/model/selectors/selectProducts';
export { selectCurrentPage } from '@/entities/Product/model/selectors/selectProducts';
export { selectLimit } from '@/entities/Product/model/selectors/selectProducts';
export { selectMetaData } from '@/entities/Product/model/selectors/selectProducts';
