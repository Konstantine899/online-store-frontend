import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductListPage } from '../ProductListPage/ProductListPage';

interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Page className={classNames(cls.ProductsPage, {}, [className])}>
        <ProductListPage />
      </Page>
    </Suspense>
  );
});

export default ProductsPage;
