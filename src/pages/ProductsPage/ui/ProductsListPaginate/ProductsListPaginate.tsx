import { memo } from 'react';
import { Paginate } from '@/entities/Paginate';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductsListPaginate.module.scss';

interface ProductsListPaginateProps {
  className?: string;
}

export const ProductsListPaginate = memo((props: ProductsListPaginateProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.ProductsListPaginate, {}, [className])}>
      <Paginate />
    </div>
  );
});
