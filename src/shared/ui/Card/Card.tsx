import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
  OUTLINED = 'outlined',
  OUTLINED_ACTIVE = 'outlined_active',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const { className, theme, children, ...otherProps } = props;

  return (
    <div
      className={classNames('', {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
