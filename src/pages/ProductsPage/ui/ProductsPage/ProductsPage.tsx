import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense, useEffect } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductsListPaginate } from '../ProductsListPaginate/ProductsListPaginate';
import { ProductsListSorting } from '../ProductsListSorting/ProductsListSorting';
import { useSelector } from 'react-redux';
import {
  fetchProducts,
  FetchProductsByBrandAndCategory,
  FetchProductsByCategory,
  getProductsListIsLoadingSelector,
  getProductsListSelector,
  getSearchSelector,
  ProductList,
  ProductsPageActions,
  ProductsPageReducer,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  BrandActions,
  BrandReducer,
  getBrandIdSelector,
} from '@/entities/Brand';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CategoryActions, getCategoryIdSelector } from '@/entities/Category';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { useParams, useSearchParams } from 'react-router-dom';

const initialAsyncReducersProductsListPage: ReducersList = {
  productsList: ProductsPageReducer,
  brand: BrandReducer,
};

interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [URLSearchParams] = useSearchParams();
  const limit = Number(URLSearchParams.get('limit'));
  const page = Number(URLSearchParams.get('page'));
  const sort = URLSearchParams.get('sort');
  const paramSearch = URLSearchParams.get('search');
  const products = useSelector(getProductsListSelector);
  const isLoading = useSelector(getProductsListIsLoadingSelector);
  const categoryId = useSelector(getCategoryIdSelector);
  const brandId = useSelector(getBrandIdSelector);
  const search = useSelector(getSearchSelector);
  const { categoryId: URLParamCategoryId, brandId: URLParamBrandId } =
    useParams();

  useEffect(() => {
    if (URLParamCategoryId) {
      dispatch(ProductsPageActions.setSearch(''));
      dispatch(CategoryActions.setCategoryId(Number(URLParamCategoryId)));
    }
    if (URLParamBrandId) {
      dispatch(ProductsPageActions.setSearch(''));
      dispatch(BrandActions.setBrandId(Number(URLParamBrandId)));
    }
  }, [URLParamBrandId, URLParamCategoryId, dispatch]);

  useEffect(() => {
    dispatch(ProductsPageActions.setPage(page || 1));
    dispatch(ProductsPageActions.setLimit(limit || 5));
    if (paramSearch) {
      dispatch(ProductsPageActions.setSearch(paramSearch));
    }
    dispatch(ProductsPageActions.setSortingOrder(sort as ISortOrder));
  }, [brandId, dispatch, limit, page, paramSearch, sort]);

  useEffect(() => {
    if (!search) {
      dispatch(fetchProducts());
    }
    if (categoryId !== 0) {
      dispatch(FetchProductsByCategory({ categoryId }));
    }
    if (categoryId !== 0 && brandId !== 0) {
      dispatch(FetchProductsByBrandAndCategory({ brandId, categoryId }));
    }
  }, [brandId, categoryId, dispatch, search]);
  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
        <Page className={classNames(cls.ProductsPage, {}, [className])}>
          {products.length ? (
            <ProductsListSorting categoryId={categoryId} />
          ) : null}
          <ProductList products={products} isLoading={isLoading} />
          {products.length ? <ProductsListPaginate /> : null}
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});

export default ProductsPage;
