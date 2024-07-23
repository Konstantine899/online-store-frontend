import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandPage.module.scss';
import {
  ProductsByCategoryAndBrand,
  ProductsByCategoryAndBrandCount,
  ProductsByCategoryAndBrandFilters,
} from '@/entities/Product';
import { Page } from '@/widgets/Page';
import { ProductsByCategoryAndBrandPaginate } from '@/features/ProductsByCategoryAndBrandPaginate';

export interface ProductsByCategoryAndBrandPageProps {
  className?: string;
}

const ProductsByCategoryAndBrandPage = memo(
  (props: ProductsByCategoryAndBrandPageProps) => {
    const { className } = props;

    return (
      <Page
        className={classNames(cls.ProductsByCategoryAndBrandPage, {}, [
          className,
        ])}
      >
        <ProductsByCategoryAndBrandCount />
        <ProductsByCategoryAndBrandFilters />
        <ProductsByCategoryAndBrand />
        <ProductsByCategoryAndBrandPaginate />
      </Page>
    );
  },
);

ProductsByCategoryAndBrandPage.displayName = `ProductsByCategoryAndBrandPage`;

export default ProductsByCategoryAndBrandPage;
