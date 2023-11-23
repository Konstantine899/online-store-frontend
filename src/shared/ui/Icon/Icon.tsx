import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props;

  return (
    <Svg className={classNames(cls.Icon, {}, [className])} {...otherProps} />
  );
});
