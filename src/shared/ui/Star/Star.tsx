import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Star.module.scss';
import StarSvg from '../../assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

export enum StarSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface StarProps {
  className?: string;
  size: StarSize;
}

export const Star = memo((props: StarProps) => {
  const { className, size } = props;

  return (
    <Icon
      className={classNames(``, {}, [className, cls[size]])}
      Svg={StarSvg}
    />
  );
});
