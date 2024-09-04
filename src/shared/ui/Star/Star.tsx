import { classNames, Mods } from '@/shared/lib/classNames/classNames';
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
  isZero: boolean;
}

export const Star = memo((props: StarProps) => {
  const { className, size, isZero = false } = props;

  const mods: Mods = {
    [cls.inverted]: isZero,
  };

  return (
    <Icon
      className={classNames(cls.star, mods, [className, cls[size]])}
      Svg={StarSvg}
    />
  );
});

Star.displayName = `Star`;
