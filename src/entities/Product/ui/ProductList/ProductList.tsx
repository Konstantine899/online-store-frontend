import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { Product } from '../../model/types/ProductsSchema';
import { ProductListItemSkeleton } from '../ProductListItemSkeleton/ProductListItemSkeleton';
import { selectLimit } from '@/entities/Paginate';
import { useSelector } from 'react-redux';
import { ProductListNotFound } from '../ProductListNotFound/ProductListNotFound';

interface ProductProps {
  className?: string;
  products: Product[];
  isLoading: boolean;
  _inited: boolean;
}

const getSkeletons = (quantity: number) => {
  return new Array(quantity)
    .fill(0)
    .map((_, index) => <ProductListItemSkeleton key={index} />);
};

export const ProductList = memo((props: ProductProps) => {
  const { className, products, isLoading, _inited } = props;
  const limit = useSelector(selectLimit);

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
