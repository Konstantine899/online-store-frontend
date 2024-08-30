import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCardImage.module.scss';
import {
  getRouteImage,
  getRouteImageNotFound,
  getRouteProduct,
} from '@/shared/consts/router/publicRouter';
import { AppLink } from '@/shared/ui/AppLink';
import { TProduct } from '../../model/types/IProductsSchema';
import { KitImage } from '@/shared/ui/KitImage/KitImage';

interface ProductCardImageProps {
  className?: string;
  product: TProduct;
}

export const ProductCardImage = memo((props: ProductCardImageProps) => {
  const { className, product } = props;

  return (
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
  );
});

ProductCardImage.displayName = `ProductCardImage`;
