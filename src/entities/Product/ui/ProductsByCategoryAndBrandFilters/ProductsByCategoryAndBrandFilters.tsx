import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandFilters.module.scss';

import { BrandTabs } from '@/entities/Brand';
import { ProductsByCategoryAndBrandSortOrder } from '../ProductsByCategoryAndBrandSortOrder/ProductsByCategoryAndBrandSortOrder';
import { ProductsByCategoryAndBrandLimit } from '../ProductsByCategoryAndBrandLimit/ProductsByCategoryAndBrandLimit';

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

ProductsByCategoryAndBrandFilters.displayName = `ProductsByCategoryAndBrandFilters`;
