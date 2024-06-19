import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  ProductList,
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSearch,
  selectProductsSortOrder,
  useProducts,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
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
  const search = useSelector(selectProductsSearch);
  const currentPage = useSelector(selectProductsCurrentPage);
  const sortOrder = useSelector(selectProductsSortOrder);
  const limit = useSelector(selectProductsLimit);
  const [fetchProducts, { data, isSuccess, isLoading }] = useProducts();

  useEffect(() => {
    fetchProducts({ search, page: currentPage, limit, sort: sortOrder });
  }, [currentPage, dispatch, fetchProducts, limit, search, sortOrder]);

  if (data && isSuccess) {
    return (
      <Page className={classNames(cls.ProductsPage, {}, [className])}>
        <PageHeading count={data.count} />
        <ProductsFilters />
        <ProductList
          products={data.rows}
          isLoading={isLoading}
          _inited={isSuccess}
          limit={limit}
        />
        <ProductsPaginate
          currentPage={data.metaData.currentPage}
          lastPage={data.metaData.lastPage}
        />
      </Page>
    );
  }
});

ProductsPage.displayName = `ProductsPage`;

export default ProductsPage;
