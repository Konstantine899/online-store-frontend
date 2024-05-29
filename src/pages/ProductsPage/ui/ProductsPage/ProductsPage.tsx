import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, MutableRefObject, Suspense, useEffect, useRef } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductsListSorting } from '../ProductsListSorting/ProductsListSorting';
import { useSelector } from 'react-redux';
import {
  entityProductReducers,
  fetchProducts,
  FetchProductsByBrandAndCategory,
  FetchProductsByCategory,
  selectProductsInited,
  selectProductsIsLoading,
  selectProducts,
  ProductList,
  ProductsActions,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { BrandActions, EntityBrandReducers } from '@/entities/Brand';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  CategoryActions,
  fetchCategory,
  getCategoryIdSelector,
} from '@/entities/Category';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProductsPageHeading } from '../ProductsPageHeading/ProductsPageHeading';
import { Paginate } from '@/entities/Paginate';

const initialAsyncReducersProductsListPage: ReducersList = {
  entityProduct: entityProductReducers,
  entityBrand: EntityBrandReducers,
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
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsIsLoading);
  const categoryId = useSelector(getCategoryIdSelector);
  const { categoryId: URLParamCategoryId, brandId: URLParamBrandId } =
    useParams();
  const _inited = useSelector(selectProductsInited);

  useEffect(() => {
    dispatch(ProductsActions.setPage(paramPage || 1));
    dispatch(ProductsActions.setLimit(paramLimit || 5));
    dispatch(ProductsActions.setSortingOrder(paramSort as ISortOrder));
    dispatch(fetchCategory({ id: Number(URLParamCategoryId) }));
  }, [URLParamCategoryId, dispatch, paramLimit, paramPage, paramSort]);

  useEffect(() => {
    if (URLParamCategoryId) {
      dispatch(ProductsActions.setSearch(''));
      dispatch(CategoryActions.setCategoryId(Number(URLParamCategoryId)));
      dispatch(
        FetchProductsByCategory({ categoryId: Number(URLParamCategoryId) }),
      );
    }
    if (URLParamCategoryId && URLParamBrandId) {
      dispatch(ProductsActions.setSearch(''));
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
      dispatch(ProductsActions.setSearch(paramSearch));
      dispatch(fetchProducts());
    }
  }, [URLParamBrandId, URLParamCategoryId, dispatch, paramSearch]);

  const topRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
        <Page className={classNames(cls.ProductsPage, {}, [className])}>
          <div ref={topRef} />
          {_inited && products.length > 0 && (
            <ProductsPageHeading categoryId={categoryId} />
          )}
          {_inited && products.length > 0 && (
            <ProductsListSorting categoryId={categoryId} />
          )}
          <ProductList
            _inited={_inited}
            products={products}
            isLoading={isLoading}
          />
          <Paginate topRef={topRef} />
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});

export default ProductsPage;
