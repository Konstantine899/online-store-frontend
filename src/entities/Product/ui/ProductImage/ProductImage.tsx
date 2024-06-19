import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import {
  getRouteImage,
  getRouteImageNotFound,
} from '@/shared/consts/router/publicRouter';

interface ProductImageProps {
  className?: string;
  image: string;
}

export const ProductImage = memo((props: ProductImageProps) => {
  const { className, image } = props;

  return (
    <KitImage
      className={classNames('', {}, [className])}
      src={getRouteImage(`${image}`)}
      alt={image}
      spareImage={<img src={getRouteImageNotFound()} alt={'not_found_image'} />}
    />
  );
});

ProductImage.displayName = `ProductImage`;
