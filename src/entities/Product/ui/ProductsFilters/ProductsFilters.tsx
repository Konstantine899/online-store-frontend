import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsFilters.module.scss';
import { ProductsSortOrder } from '../ProductsSortOrder/ProductsSortOrder';
import { ProductsLimit } from '../ProductsLimit/ProductsLimit';

interface ProductsFiltersProps {
  className?: string;
}

export const ProductsFilters = memo((props: ProductsFiltersProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ProductsFilters, {}, [className])}>
      <ProductsSortOrder />
      <ProductsLimit />
    </div>
  );
});

ProductsFilters.displayName = `ProductsFilters`;
