import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductsListPage } from '../ProductsListPage/ProductsListPage';
import { ProductsListPaginate } from '../ProductsListPaginate/ProductsListPaginate';
import { ProductsListSorting } from '@/pages/ProductsPage/ui/ProductsListSorting/ProductsListSorting';

interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  return (
    <Suspense fallback={''}>
      <Page className={classNames(cls.ProductsPage, {}, [className])}>
        <ProductsListSorting />
        <ProductsListPage />
        <ProductsListPaginate />
      </Page>
    </Suspense>
  );
});

export default ProductsPage;
