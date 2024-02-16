import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotFoundImage.module.scss';
import { Icon } from '@/shared/ui/Icon';
import NotFoundImageIcon from '@/shared/assets/icons/not_found_404.svg';

interface NotFoundImageProps {
  className?: string;
}

export const NotFoundImage = memo((props: NotFoundImageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.errorNotfoundWrapper, {}, [className])}>
      <Icon className={cls.NotFoundImageIcon} Svg={NotFoundImageIcon} />
    </div>
  );
});
