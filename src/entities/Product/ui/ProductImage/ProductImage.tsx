import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { KitImage } from '@/shared/ui/KitImage/KitImage';

interface ProductImageProps {
  className?: string;
  image: string;
}

export const ProductImage = memo((props: ProductImageProps) => {
  const { className, image } = props;

  return (
    <KitImage
      className={classNames('', {}, [className])}
      src={`${__API_URL__}/static/${image}`}
      alt={image}
      spareImage={
        <img
          src={`${__API_URL__}/static/not_found_image.jpeg`}
          alt={'not_found_image'}
        />
      }
    />
  );
});
