import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductPopular.module.scss';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';

interface ProductPopularProps {
  className?: string;
}

export const ProductPopular = memo((props: ProductPopularProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ProductPopular, {}, [className])}>
      <h1 className={cls.Title}>Популярные товары</h1>
      <ProductCarousel />
    </div>
  );
});
