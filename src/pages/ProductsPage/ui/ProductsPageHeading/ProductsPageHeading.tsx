import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsPageHeading.module.scss';
import { getCategoryNameSelector } from '@/entities/Category';
import { useSelector } from 'react-redux';
import { getCountSelector } from '@/entities/Product';

interface ProductsPageHeadingProps {
  className?: string;
}

export const ProductsPageHeading = memo((props: ProductsPageHeadingProps) => {
  const { className } = props;
  const categoryName = useSelector(getCategoryNameSelector);
  const count = useSelector(getCountSelector);

  return (
    <div className={classNames(cls.ProductsPageHeading, {}, [className])}>
      <h1>
        {categoryName} <span>{`(${count})`}</span>
      </h1>
    </div>
  );
});
