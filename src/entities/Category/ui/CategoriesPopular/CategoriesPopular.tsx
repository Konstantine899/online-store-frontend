import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesPopular.module.scss';
import { CategoryCarousel } from '../CategoryCarousel/CategoryCarousel';

interface CategoriesPopularProps {
  className?: string;
}

export const CategoriesPopular = memo((props: CategoriesPopularProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <h1>Популярные категории</h1>
      <CategoryCarousel />
    </div>
  );
});
