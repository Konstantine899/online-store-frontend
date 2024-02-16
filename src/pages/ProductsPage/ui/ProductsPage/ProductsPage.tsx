import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductsListPage } from '../ProductsListPage/ProductsListPage';
import { ProductsListPaginate } from '../ProductsListPaginate/ProductsListPaginate';
import { ProductsListSorting } from '../ProductsListSorting/ProductsListSorting';
import { useSelector } from 'react-redux';
import { getProductsListSelector } from '@/entities/Product';

interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;
  const products = useSelector(getProductsListSelector);

  return (
    <Suspense fallback={''}>
      <Page className={classNames(cls.ProductsPage, {}, [className])}>
        {products.length ? <ProductsListSorting /> : null}
        <ProductsListPage />
        {products.length ? <ProductsListPaginate /> : null}
      </Page>
    </Suspense>
  );
});

export default ProductsPage;
