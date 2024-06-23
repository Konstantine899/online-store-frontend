import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  Product,
  ProductHeading,
  ProductSpecification,
} from '@/entities/Product';

export interface ProductDetailsPageProps {
  className?: string;
}

const ProductPage = memo((props: ProductDetailsPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls.ProductDetailsPage, {}, [className])}>
      <ProductHeading />
      <Product />
      <ProductSpecification />
    </Page>
  );
});

ProductPage.displayName = `ProductPage`;

export default ProductPage;
