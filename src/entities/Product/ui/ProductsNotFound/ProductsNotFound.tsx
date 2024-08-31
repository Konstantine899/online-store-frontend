import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsNotFound.module.scss';

interface ProductsNotFoundProps {
  className?: string;
}

export const ProductsNotFound = memo((props: ProductsNotFoundProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ProductsNotFound, {}, [className])}></div>
  );
});

ProductsNotFound.displayName = `ProductsNotFound`;
