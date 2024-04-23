import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CategoriesPopular.module.scss';
import { CategoryCarousel } from '../CategoryCarousel/CategoryCarousel';
import { ICategory } from '../../model/types/ICategory';

interface CategoriesPopularProps {
  className?: string;
  categories?: ICategory[];
}

export const CategoriesPopular = memo((props: CategoriesPopularProps) => {
  const { className, categories } = props;

  return (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <h1 className={cls.Title}>Популярные категории</h1>
      <CategoryCarousel categories={categories} />
    </div>
  );
});
