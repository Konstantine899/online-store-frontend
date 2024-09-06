import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  Products,
  ProductsFilters,
  ProductsPaginate,
} from '@/entities/Product';
import { ProductsCount } from '../ProductsCount/ProductsCount';

export interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls.ProductsPage, {}, [className])}>
      <ProductsCount />
      <ProductsFilters />
      <Products />
      <ProductsPaginate />
    </Page>
  );
});

ProductsPage.displayName = `ProductsPage`;

export default ProductsPage;
