import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandFilters.module.scss';
import {
  ProductsByCategoryAndBrandLimit,
  ProductsByCategoryAndBrandSortOrder,
} from '@/entities/Product';
import { BrandTabs } from '@/entities/Brand';

interface ProductsByCategoryAndBrandFiltersProps {
  className?: string;
}

export const ProductsByCategoryAndBrandFilters = memo(
  (props: ProductsByCategoryAndBrandFiltersProps) => {
    const { className } = props;

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandFilters, {}, [
          className,
        ])}
      >
        <ProductsByCategoryAndBrandSortOrder />
        <ProductsByCategoryAndBrandLimit />
        <BrandTabs />
      </div>
    );
  },
);
