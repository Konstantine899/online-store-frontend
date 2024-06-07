import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryFilters.module.scss';
import {
  ProductsByCategorySortOrder,
  ProductsByCategoryLimit,
} from '@/entities/Product';

interface ProductsByCategoryFiltersProps {
  className?: string;
}

export const ProductsByCategoryFilters = memo(
  (props: ProductsByCategoryFiltersProps) => {
    const { className } = props;

    return (
      <div
        className={classNames(cls.ProductsByCategoryFilters, {}, [className])}
      >
        <ProductsByCategorySortOrder />
        <ProductsByCategoryLimit />
      </div>
    );
  },
);
