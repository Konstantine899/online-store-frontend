import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsPageHeading.module.scss';
import { useSelector } from 'react-redux';
import { getCountSelector } from '@/entities/Product';
import { selectCategory } from '@/entities/Category';

interface ProductsPageHeadingProps {
  className?: string;
}

export const ProductsPageHeading = memo((props: ProductsPageHeadingProps) => {
  const { className } = props;
  const category = useSelector(selectCategory);
  const count = useSelector(getCountSelector);

  return (
    <div className={classNames(cls.ProductsPageHeading, {}, [className])}>
      <h1>
        {!category?.id ? `Все товары` : `${category?.name}`}
        <span>{`(${count})`}</span>
      </h1>
    </div>
  );
});
