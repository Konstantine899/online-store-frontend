import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCardPrice.module.scss';
import { TProduct } from '../../model/types/IProductsSchema';

interface ProductCardPriceProps {
  className?: string;
  product: TProduct;
}

export const ProductCardPrice = memo((props: ProductCardPriceProps) => {
  const { className, product } = props;

  return (
    <div className={classNames(cls.CardPriceWrapper, {}, [className])}>
      <div className={cls.CardPrice}>{product.price}</div>
    </div>
  );
});
