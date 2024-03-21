import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCardImage.module.scss';
import { getRouteProduct } from '@/shared/consts/router/publicRouter';
import { ProductImage } from '../ProductImage/ProductImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Product } from '../../model/types/ProductsSchema';

interface ProductCardImageProps {
  className?: string;
  product?: Product;
}

export const ProductCardImage = memo((props: ProductCardImageProps) => {
  const { className, product } = props;

  return (
    <AppLink
      to={getRouteProduct(`${product.id}`)}
      className={classNames(cls.CardImage, {}, [className])}
    >
      <ProductImage product={product} />
    </AppLink>
  );
});
