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
  ProductList,
  ProductsActions,
  selectProducts,
  selectProductsInited,
  selectProductsIsLoading,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { BrandActions, EntityBrandReducers } from '@/entities/Brand';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CategoryActions, fetchCategory } from '@/entities/Category';
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
  const { categoryId, brandId } = useParams();
  const _inited = useSelector(selectProductsInited);

  useEffect(() => {
    dispatch(ProductsActions.setPage(paramPage || 1));
    dispatch(ProductsActions.setLimit(paramLimit || 5));
    dispatch(ProductsActions.setSortingOrder(paramSort as ISortOrder));
    dispatch(fetchCategory({ id: Number(categoryId) }));
  }, [categoryId, dispatch, paramLimit, paramPage, paramSort]);

  useEffect(() => {
    if (categoryId) {
      dispatch(ProductsActions.setSearch(''));
      dispatch(CategoryActions.setCategoryId(Number(categoryId)));
      dispatch(FetchProductsByCategory({ categoryId: Number(categoryId) }));
    }
    if (categoryId && brandId) {
      dispatch(ProductsActions.setSearch(''));
      dispatch(CategoryActions.setCategoryId(Number(categoryId)));
      dispatch(BrandActions.setBrandId(Number(brandId)));
      dispatch(
        FetchProductsByBrandAndCategory({
          brandId: Number(brandId),
          categoryId: Number(categoryId),
        }),
      );
    }
    if (!categoryId) {
      dispatch(fetchProducts());
    }
    if (paramSearch) {
      dispatch(ProductsActions.setSearch(paramSearch));
      dispatch(fetchProducts());
    }
  }, [brandId, categoryId, dispatch, paramSearch]);

  const topRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
        <Page className={classNames(cls.ProductsPage, {}, [className])}>
          <div ref={topRef} />
          {_inited && products.length > 0 && <ProductsPageHeading />}
          {_inited && products.length > 0 && <ProductsListSorting />}
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
