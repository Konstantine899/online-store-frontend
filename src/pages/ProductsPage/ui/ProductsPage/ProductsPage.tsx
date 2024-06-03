import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, MutableRefObject, Suspense, useEffect, useRef } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductsListSorting } from '../ProductsListSorting/ProductsListSorting';
import {
  entityProductReducers,
  fetchProducts,
  FetchProductsByBrandAndCategory,
  FetchProductsByCategory,
  ProductList,
  ProductsActions,
  selectCurrentPage,
  selectLimit,
  selectSortOrder,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EntityBrandReducers } from '@/entities/Brand';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchCategory } from '@/entities/Category';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProductsPageHeading } from '../ProductsPageHeading/ProductsPageHeading';
import { Paginate } from '@/entities/Paginate';
import { useSelector } from 'react-redux';

const initialAsyncReducersProductsListPage: ReducersList = {
  entityProduct: entityProductReducers,
  brand: EntityBrandReducers,
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
  const limit = useSelector(selectLimit);
  const currentPage = useSelector(selectCurrentPage);
  const sortOrder = useSelector(selectSortOrder);

  useEffect(() => {
    dispatch(ProductsActions.setPage(Number(currentPage)));
    dispatch(ProductsActions.setLimit(limit));
    dispatch(ProductsActions.setSortingOrder(sortOrder));
  }, [categoryId, currentPage, dispatch, limit, sortOrder]);

  useEffect(() => {
    if (categoryId) {
      dispatch(ProductsActions.setSearch(''));
      dispatch(fetchCategory({ id: Number(categoryId) }));
      dispatch(FetchProductsByCategory({ categoryId: Number(categoryId) }));
    }
    if (categoryId && brandId) {
      dispatch(ProductsActions.setSearch(''));
      dispatch(fetchCategory({ id: Number(categoryId) }));
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
      <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
        <Page className={classNames(cls.ProductsPage, {}, [className])}>
          <div ref={topRef} />
          <ProductsPageHeading />
          <ProductsListSorting />
          <ProductList />
          <Paginate topRef={topRef} />
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});

export default ProductsPage;
