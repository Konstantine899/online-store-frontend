import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  ProductsByCategoryCount,
  ProductsByCategory,
  ProductsByCategoryFilters,
  ProductsByCategoryPaginate,
} from '@/entities/Product';

export interface ProductsByCategoryPageProps {
  className?: string;
}

const ProductsByCategoryPage = memo((props: ProductsByCategoryPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls.ProductsByCategoryPage, {}, [className])}>
      <ProductsByCategoryCount />
      <ProductsByCategoryFilters />
      <ProductsByCategory />
      <ProductsByCategoryPaginate />
    </Page>
  );
});

ProductsByCategoryPage.displayName = `ProductsByCategoryPage`;

export default ProductsByCategoryPage;
