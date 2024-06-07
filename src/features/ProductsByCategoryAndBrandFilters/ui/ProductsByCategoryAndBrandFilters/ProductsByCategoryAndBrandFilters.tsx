import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandFilters.module.scss';
import { ProductsByCategoryAndBrandSortOrder } from '@/entities/Product';

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
      </div>
    );
  },
);
