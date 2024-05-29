import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsListSorting.module.scss';
import {
  ProductSortingLimit,
  ProductSortingOrder,
  ProductTabBrand,
  selectProducts,
  selectProductsInited,
} from '@/entities/Product';
import { useSelector } from 'react-redux';

interface ProductsListSortingProps {
  className?: string;
}

export const ProductsListSorting = memo((props: ProductsListSortingProps) => {
  const { className } = props;
  const _inited = useSelector(selectProductsInited);
  const products = useSelector(selectProducts);

  if (_inited && products.length > 0) {
    return (
      <div className={classNames(cls.ProductsListSorting, {}, [className])}>
        <ProductSortingOrder />
        <ProductSortingLimit />
        <ProductTabBrand />
      </div>
    );
  }
});
