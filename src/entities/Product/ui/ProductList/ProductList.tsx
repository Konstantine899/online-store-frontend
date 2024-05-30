import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { ProductListItemSkeleton } from '../ProductListItemSkeleton/ProductListItemSkeleton';
import { useSelector } from 'react-redux';
import { ProductListNotFound } from '../ProductListNotFound/ProductListNotFound';
import {
  selectLimit,
  selectProducts,
  selectProductsInited,
  selectProductsIsLoading,
} from '../../model/selectors/selectProducts';

interface ProductProps {
  className?: string;
}

const getSkeletons = (quantity: number) => {
  return new Array(quantity)
    .fill(0)
    .map((_, index) => <ProductListItemSkeleton key={index} />);
};

export const ProductList = memo((props: ProductProps) => {
  const { className } = props;
  const limit = useSelector(selectLimit);
  const _inited = useSelector(selectProductsInited);
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsIsLoading);

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
