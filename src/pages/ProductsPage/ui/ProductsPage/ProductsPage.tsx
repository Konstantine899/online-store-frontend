import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, MutableRefObject, Suspense, useEffect, useRef } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  fetchProducts,
  FetchProductsByBrandAndCategory,
  ProductList,
  ProductsActions,
  selectCount,
  selectCurrentPage,
  selectLimit,
  selectProducts,
  selectProductsInited,
  selectProductsIsLoading,
  selectSortOrder,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { brandReducers } from '@/entities/Brand';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useParams, useSearchParams } from 'react-router-dom';
import { Paginate } from '@/entities/Paginate';
import { useSelector } from 'react-redux';
import { productsPageReducers } from '../../model/slices';
import { PageHeading } from '@/entities/PageHeading';
import { ProductsFilters } from '@/features/ProductsFilters';

const reducers: ReducersList = {
  productsPage: productsPageReducers,
  brand: brandReducers,
};

interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const topRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [URLSearchParams] = useSearchParams();
  const paramSearch = URLSearchParams.get('search');
  const { categoryId, brandId } = useParams();
  const currentPage = useSelector(selectCurrentPage);
  const sortOrder = useSelector(selectSortOrder);
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsIsLoading);
  const _inited = useSelector(selectProductsInited);
  const limit = useSelector(selectLimit);
  const count = useSelector(selectCount);

  useEffect(() => {
    dispatch(ProductsActions.setPage(Number(currentPage)));
    dispatch(ProductsActions.setLimit(limit));
    dispatch(ProductsActions.setSortingOrder(sortOrder));
  }, [categoryId, currentPage, dispatch, limit, sortOrder]);

  useEffect(() => {
    if (categoryId && brandId) {
      dispatch(ProductsActions.setSearch(''));
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

  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={reducers}>
        <Page className={classNames(cls.ProductsPage, {}, [className])}>
          <div ref={topRef} />
          <PageHeading count={count} />
          <ProductsFilters />
          <ProductList
            products={products}
            isLoading={isLoading}
            _inited={_inited}
            limit={limit}
          />
          <Paginate topRef={topRef} />
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});

export default ProductsPage;
