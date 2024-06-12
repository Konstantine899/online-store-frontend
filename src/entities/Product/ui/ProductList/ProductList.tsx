import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { ProductListItemSkeleton } from '../ProductListItemSkeleton/ProductListItemSkeleton';
import { ProductListNotFound } from '../ProductListNotFound/ProductListNotFound';
import { TProduct } from '../../model/types/IProductsSchema';

interface ProductProps {
  className?: string;
  _inited: boolean;
  products: TProduct[];
  limit: number;
  isLoading: boolean;
}

const getSkeletons = (quantity: number) => {
  return new Array(quantity)
    .fill(0)
    .map((_, index) => <ProductListItemSkeleton key={index} />);
};

export const ProductList = memo((props: ProductProps) => {
  const { className, limit, products, isLoading, _inited } = props;

  if (_inited && products.length == 0) {
    return (
      <div className={classNames(cls.ProductListError, {}, [className])}>
        <ProductListNotFound
          message={'Извините, но по вашему запросу ничего не найдено'}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProductList, {}, [className])}>
      {_inited &&
        products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      {isLoading && getSkeletons(limit)}
    </div>
  );
});
