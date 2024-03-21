import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCardTitle.module.scss';
import { getRouteProduct } from '@/shared/consts/router/publicRouter';
import { AppLink, AppLinkFontSizeSize } from '@/shared/ui/AppLink/AppLink';
import { Product } from '../../model/types/ProductsSchema';

interface ProductCardTitleProps {
  className?: string;
  product?: Product;
}

export const ProductCardTitle = memo((props: ProductCardTitleProps) => {
  const { className, product } = props;

  return (
    <AppLink
      className={classNames(cls.CardTitle, {}, [cls[className]])}
      to={getRouteProduct(`${product.id}`)}
      fontSize={AppLinkFontSizeSize.M}
    >
      {product.name}
    </AppLink>
  );
});
