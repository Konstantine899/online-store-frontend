import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCardPrice.module.scss';
import { Product } from '../../model/types/ProductsSchema';

interface ProductCardPriceProps {
  className?: string;
  product?: Product;
}

export const ProductCardPrice = memo((props: ProductCardPriceProps) => {
  const { className, product } = props;

  return (
    <div className={classNames(cls.CardPriceWrapper, {}, [cls[className]])}>
      <div className={cls.CardPrice}>{product.price}</div>
    </div>
  );
});
