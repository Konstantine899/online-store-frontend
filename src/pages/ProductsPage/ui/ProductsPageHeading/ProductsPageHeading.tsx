import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsPageHeading.module.scss';
import { useSelector } from 'react-redux';
import { selectCategory } from '@/entities/Category';
import { selectCount } from '@/entities/Product';

interface ProductsPageHeadingProps {
  className?: string;
}

export const ProductsPageHeading = memo((props: ProductsPageHeadingProps) => {
  const { className } = props;
  const category = useSelector(selectCategory);
  const count = useSelector(selectCount);

  return (
    <div className={classNames(cls.ProductsPageHeading, {}, [className])}>
      <h1>
        {!category?.id ? `Все товары` : `${category?.name}`}
        <span>{`(${count})`}</span>
      </h1>
    </div>
  );
});
