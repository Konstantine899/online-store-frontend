import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './HedgehogImage.module.scss';
import { KitImage } from '@/shared/ui/KitImage/KitImage';

interface HedgehogImageProps {
  className?: string;
}

export const HedgehogImage = memo((props: HedgehogImageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.HedgehogImageWrapper, {}, [className])}>
      <KitImage
        className={cls.HedgehogImage}
        src={`${__API_URL__}/static/hedgehog.jpg`}
        alt={'ежик в тумане'}
      />
    </div>
  );
});
