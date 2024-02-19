import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsListSorting.module.scss';
import { SortingOrder } from '@/features/Filters';
import { TabBrand } from '@/features/Filters';
import { SortingLimit } from '@/features/Filters/ui/SortingLimit/SortingLimit';

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
