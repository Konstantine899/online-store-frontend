import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryFilters.module.scss';

import { BrandTabs } from '@/entities/Brand';
import { ProductsByCategorySortOrder } from '../ProductsByCategorySortOrder/ProductsByCategorySortOrder';
import { ProductsByCategoryLimit } from '../ProductsByCategoryLimit/ProductsByCategoryLimit';

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
        <BrandTabs />
      </div>
    );
  },
);

ProductsByCategoryFilters.displayName = `ProductsByCategoryFilters`;
