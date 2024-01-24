import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { Product } from '@/pages/ProductsPage/model/types/ProductsPageSchema';

interface ProductProps {
  className?: string;
  products?: Product[];
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
