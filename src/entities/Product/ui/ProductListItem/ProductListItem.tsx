import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductListItem.module.scss';
import { Product } from '../../model/types/ProductsSchema';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductListItemProps {
  className?: string;
  product?: Product;
}

export const ProductListItem = memo((props: ProductListItemProps) => {
  const { className, product } = props;
  return (
    <div className={classNames(cls.ProductListItem, {}, [className])}>
      <ProductCard product={product} />
    </div>
  );
});
