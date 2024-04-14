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
  ProductList,
  ProductsPageActions,
  ProductsPageReducer,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { BrandActions, BrandReducer } from '@/entities/Brand';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  CategoryActions,
  fetchCategory,
  getCategoryIdSelector,
} from '@/entities/Category';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProductsPageHeading } from '../ProductsPageHeading/ProductsPageHeading';

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
  const paramLimit = Number(URLSearchParams.get('limit'));
  const paramPage = Number(URLSearchParams.get('page'));
  const paramSort = URLSearchParams.get('sort');
  const paramSearch = URLSearchParams.get('search');
  const products = useSelector(getProductsListSelector);
  const isLoading = useSelector(getProductsListIsLoadingSelector);
  const categoryId = useSelector(getCategoryIdSelector);
  const { categoryId: URLParamCategoryId, brandId: URLParamBrandId } =
    useParams();

  useEffect(() => {
    dispatch(ProductsPageActions.setPage(paramPage || 1));
    dispatch(ProductsPageActions.setLimit(paramLimit || 5));
    dispatch(ProductsPageActions.setSortingOrder(paramSort as ISortOrder));
    dispatch(fetchCategory({ id: Number(URLParamCategoryId) }));
  }, [URLParamCategoryId, dispatch, paramLimit, paramPage, paramSort]);

  useEffect(() => {
    if (URLParamCategoryId) {
      dispatch(ProductsPageActions.setSearch(''));
      dispatch(CategoryActions.setCategoryId(Number(URLParamCategoryId)));
      dispatch(
        FetchProductsByCategory({ categoryId: Number(URLParamCategoryId) }),
      );
    }
    if (URLParamCategoryId && URLParamBrandId) {
      dispatch(ProductsPageActions.setSearch(''));
      dispatch(CategoryActions.setCategoryId(Number(URLParamCategoryId)));
      dispatch(BrandActions.setBrandId(Number(URLParamBrandId)));
      dispatch(
        FetchProductsByBrandAndCategory({
          brandId: Number(URLParamBrandId),
          categoryId: Number(URLParamCategoryId),
        }),
      );
    }
    if (!URLParamCategoryId) {
      dispatch(fetchProducts());
    }
    if (paramSearch) {
      dispatch(ProductsPageActions.setSearch(paramSearch));
      dispatch(fetchProducts());
    }
  }, [URLParamBrandId, URLParamCategoryId, dispatch, paramSearch]);

  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
        <Page className={classNames(cls.ProductsPage, {}, [className])}>
          <ProductsPageHeading />
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
