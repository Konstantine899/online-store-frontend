import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductPopular.module.scss';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { ProductCarouselHeading } from '../ProductCarouselHeading/ProductCarouselHeading';
import { ICategory } from '@/entities/Category';

interface ProductPopularProps {
  className?: string;
  categories?: ICategory[];
}

export const ProductPopular = memo((props: ProductPopularProps) => {
  const { className, categories } = props;

  return (
    <div className={classNames(cls.ProductPopular, {}, [className])}>
      <ProductCarouselHeading categories={categories} />
      <ProductCarousel />
    </div>
  );
});
