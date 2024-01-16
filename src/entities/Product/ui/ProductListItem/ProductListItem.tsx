import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductListItem.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { AppLink } from '@/shared/ui/AppLink';
import { publicRoutePath } from '@/app/providers/router/config/publicRouterConfig';
import { Icon } from '@/shared/ui/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { ProductSchema } from '@/entities/Product';

interface ProductListItemProps {
  className?: string;
  product?: ProductSchema;
}

export const ProductListItem = memo((props: ProductListItemProps) => {
  const { className, product } = props;

  return (
    <div className={classNames(cls.ProductListItem, {}, [className])}>
      <Card key={product.id} theme={CardTheme.OUTLINED}>
        <div className={cls.CardTop}>
          <AppLink to={publicRoutePath.get_product} className={cls.CardImage}>
            <img src={product.image} alt={product.name} />
          </AppLink>
        </div>
        <div className={cls.CardBottom}>
          <div className={cls.CardPrice}>
            <div className={cls.CardPriceCommon}>{product.price}</div>
          </div>
          <div className={cls.CardRating}>
            <div className={cls.RatingWrapper}>
              <Icon className={cls.StarIcon} Svg={StarIcon} />
              <div className={cls.Rating}>{product.rating}</div>
            </div>

            {/* Должна быть работа со строками обработай */}
            <div className={cls.Voted}>{product.voted} оценки</div>
          </div>
          <AppLink to={publicRoutePath.get_product} className={cls.CardTitle}>
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
