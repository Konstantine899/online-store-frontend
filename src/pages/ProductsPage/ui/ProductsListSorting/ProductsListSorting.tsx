import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsListSorting.module.scss';
import {
  ProductSortingLimit,
  ProductSortingOrder,
  ProductTabBrand,
} from '@/entities/Product';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';

interface ProductsListSortingProps {
  className?: string;
}

export const ProductsListSorting = memo((props: ProductsListSortingProps) => {
  const { className } = props;
  const categoryId = useSelector(selectCategoryId);
  return (
    <div className={classNames(cls.ProductsListSorting, {}, [className])}>
      <ProductSortingOrder />
      <ProductSortingLimit />
      {categoryId == 0 ? null : <ProductTabBrand />}
    </div>
  );
});
