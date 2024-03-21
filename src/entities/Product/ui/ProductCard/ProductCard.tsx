import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { ProductCardImage } from '../ProductCardImage/ProductCardImage';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Product } from '../../model/types/ProductsSchema';
import { ProductCardTitle } from '../ProductCardTitle/ProductCardTitle';

interface ProductCardProps {
  className?: string;
  product?: Product;
}

export const ProductCard = memo((props: ProductCardProps) => {
  const { className, product } = props;

  return (
    <Card
      key={product.id}
      theme={CardTheme.OUTLINED}
      className={classNames(cls.ProductCard, {}, [cls[className]])}
    >
      <div className={cls.CardTop}>
        <ProductCardImage product={product} />
      </div>
      <div className={cls.CardBottom}>
        <ProductCardTitle product={product} />
        <div className={cls.CardPriceWrapper}>
          <div className={cls.CardPrice}>{product.price}</div>
        </div>
        <Button
          className={cls.CardAdd}
          theme={ButtonTheme.OUTLINE}
          size={ButtonSize.M}
          fullWidth
        >
          Добавить в корзину
        </Button>
      </div>
    </Card>
  );
});
