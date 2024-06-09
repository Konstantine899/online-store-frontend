import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  fetchProducts,
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
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
// eslint-disable-next-line feature-slised-design-bak-plugin/public-api
import { Paginate } from '@/entities/deprecated/Paginate';
import { useSelector } from 'react-redux';
import { PageHeading } from '@/entities/PageHeading';
import { ProductsFilters } from '@/features/ProductsFilters';
import { ProductsPaginate } from '@/features/ProductsPaginate';

export interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [URLSearchParams] = useSearchParams();
  const paramSearch = URLSearchParams.get('search');
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
    if (paramSearch) dispatch(ProductsActions.setSearch(paramSearch));
    dispatch(fetchProducts());
  }, [currentPage, dispatch, limit, paramSearch, sortOrder]);

  return (
    <Page className={classNames(cls.ProductsPage, {}, [className])}>
      <PageHeading count={count} />
      <ProductsFilters />
      <ProductList
        products={products}
        isLoading={isLoading}
        _inited={_inited}
        limit={limit}
      />
      <ProductsPaginate />
    </Page>
  );
});

export default ProductsPage;
