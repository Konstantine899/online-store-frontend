import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductListItem.module.scss';
import { Product } from '../../model/types/ProductsSchema';
import { AppLink } from '@/shared/ui/AppLink';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { getRouteProduct } from '@/shared/consts/router/publicRouter';
import { AppLinkFontSizeSize } from '@/shared/ui/AppLink/AppLink';
import { ProductImage } from '@/entities/Product/ui/ProductImage/ProductImage';

interface ProductListItemProps {
  className?: string;
  product?: Product;
}

export const ProductListItem = memo((props: ProductListItemProps) => {
  const { className, product } = props;
  return (
    <div className={classNames(cls.ProductListItem, {}, [className])}>
      <Card
        key={product.id}
        theme={CardTheme.OUTLINED}
        className={cls.ProductCard}
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
          <div className={cls.CardPrice}>
            <div className={cls.CardPriceCommon}>{product.price}</div>
          </div>
          <AppLink
            to={getRouteProduct(`${product.id}`)}
            className={cls.CardTitle}
            fontSize={AppLinkFontSizeSize.M}
          >
            {product.name}
          </AppLink>
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
    </div>
  );
});
