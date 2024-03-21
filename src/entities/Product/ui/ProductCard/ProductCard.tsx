import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProduct } from '@/shared/consts/router/publicRouter';
import { ProductImage } from '../ProductImage/ProductImage';
import { AppLinkFontSizeSize } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Product } from '../../model/types/ProductsSchema';

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
        <AppLink
          to={getRouteProduct(`${product.id}`)}
          className={cls.CardImage}
        >
          <ProductImage product={product} />
        </AppLink>
      </div>
      <div className={cls.CardBottom}>
        <AppLink
          to={getRouteProduct(`${product.id}`)}
          className={cls.CardTitle}
          fontSize={AppLinkFontSizeSize.M}
        >
          {product.name}
        </AppLink>
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
