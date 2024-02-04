import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsListSorting.module.scss';
import { SortingOrder } from '@/features/Filters/ui/SortingOrder/SortingOrder';

interface ProductsListSortingProps {
  className?: string;
}

export const ProductsListSorting = memo((props: ProductsListSortingProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ProductsListSorting, {}, [className])}>
      <SortingOrder />
    </div>
  );
});
