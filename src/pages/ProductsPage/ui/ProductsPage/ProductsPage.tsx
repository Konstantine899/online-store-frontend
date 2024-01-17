import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductsListPage } from '../ProductsListPage/ProductsListPage';

interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Page className={classNames(cls.ProductsPage, {}, [className])}>
        <ProductsListPage />
      </Page>
    </Suspense>
  );
});

export default ProductsPage;
