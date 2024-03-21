import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Thumb.module.scss';
import { Icon } from '../Icon/Icon';
import ThumbIcon from '../../assets/icons/thumbs-up.svg';

export enum ThumbSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ThumbProps {
  className?: string;
  size?: ThumbSize;
}

export const Thumb = memo((props: ThumbProps) => {
  const { className, size } = props;

  return (
    <Icon
      Svg={ThumbIcon}
      className={classNames(``, {}, [className, cls[size]])}
    />
  );
});
