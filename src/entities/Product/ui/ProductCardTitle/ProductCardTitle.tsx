import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCardTitle.module.scss';
import { getRouteProduct } from '@/shared/consts/router/publicRouter';
import { AppLink, AppLinkFontSizeSize } from '@/shared/ui/AppLink/AppLink';
import { TProduct } from '../../model/types/IProductsSchema';

interface ProductCardTitleProps {
  className?: string;
  product: TProduct;
}

export const ProductCardTitle = memo((props: ProductCardTitleProps) => {
  const { className, product } = props;

  return (
    <AppLink
      className={classNames(cls.CardTitle, {}, [className])}
      to={getRouteProduct(`${product.id}`)}
      fontSize={AppLinkFontSizeSize.M}
    >
      {product.name}
    </AppLink>
  );
});
