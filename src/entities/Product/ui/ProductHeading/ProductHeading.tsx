import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductHeading.module.scss';

interface ProductHeadingProps {
  className?: string;
  name: string;
}

export const ProductHeading = memo((props: ProductHeadingProps) => {
  const { className, name } = props;

  return (
    <div className={classNames(cls.ProductHeading, {}, [className])}>
      <h1>{name}</h1>
    </div>
  );
});
