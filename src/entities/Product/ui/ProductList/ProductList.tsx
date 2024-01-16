import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductSchema } from '@/entities/Product';
import { ProductListItem } from '../ProductListItem/ProductListItem';

interface ProductProps {
  className?: string;
  products?: ProductSchema[];
}

export const ProductList = memo((props: ProductProps) => {
  const { className, products } = props;

  return (
    <div className={classNames(cls.ProductList, {}, [className])}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
});
