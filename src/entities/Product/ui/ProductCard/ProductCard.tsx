import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { TProduct } from '../../model/types/IProductsSchema';
import {
  getRouteImage,
  getRouteImageNotFound,
  getRouteProduct,
} from '@/shared/consts/router/publicRouter';
import { AppLink, AppLinkFontSize } from '@/shared/ui/AppLink/AppLink';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';
import { KitImage } from '@/shared/ui/KitImage/KitImage';

interface ProductCardProps {
  className?: string;
  product: TProduct;
}

export const ProductCard = memo((props: ProductCardProps) => {
  const { className, product } = props;

  return (
    <Card
      key={product.id}
      theme={CardTheme.OUTLINED}
      className={classNames(cls.ProductCard, {}, [className])}
    >
      <div className={cls.CardTop}>
        <AppLink
          to={getRouteProduct(`${product.id}`)}
          className={classNames(cls.CardImage, {}, [className])}
        >
          <KitImage
            className={classNames('', {}, [className])}
            src={getRouteImage(product.image)}
            alt={product.image}
            spareImage={
              <img src={getRouteImageNotFound()} alt={'not_found_image'} />
            }
          />
        </AppLink>
      </div>
      <div className={cls.CardBottom}>
        <AppLink
          className={classNames(cls.CardTitle, {}, [className])}
          to={getRouteProduct(`${product.id}`)}
          fontSize={AppLinkFontSize.M}
        >
          <Text text={product.name} theme={TextTheme.INVERTED} />
        </AppLink>
        <Text
          className={cls.CardPrice}
          text={`${product.price}`}
          theme={TextTheme.INVERTED}
        />
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

ProductCard.displayName = `ProductCard`;
