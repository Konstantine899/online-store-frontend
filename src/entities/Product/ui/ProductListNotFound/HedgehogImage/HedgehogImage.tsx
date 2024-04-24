import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './HedgehogImage.module.scss';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import {
  getRouteImage,
  getRouteImageNotFound,
} from '@/shared/consts/router/publicRouter';

interface HedgehogImageProps {
  className?: string;
}

export const HedgehogImage = memo((props: HedgehogImageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.HedgehogImageWrapper, {}, [className])}>
      <KitImage
        className={cls.HedgehogImage}
        src={getRouteImage(`pngwing.png`)}
        alt={`hedgehog`}
        spareImage={
          <img src={getRouteImageNotFound()} alt={'not_found_image'} />
        }
      />
    </div>
  );
});
