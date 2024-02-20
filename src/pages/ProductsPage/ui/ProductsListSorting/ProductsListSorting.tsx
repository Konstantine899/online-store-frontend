import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { SortingOrder, SortingLimit, TabBrand } from '@/features/Filters';
import cls from './ProductsListSorting.module.scss';

interface ProductsListSortingProps {
  className?: string;
}

export const ProductsListSorting = memo((props: ProductsListSortingProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ProductsListSorting, {}, [className])}>
      <SortingOrder />
      <SortingLimit />
      <TabBrand />
    </div>
  );
});
