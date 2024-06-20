import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Products.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { getProductsSkeletons } from '../../lib/helpers/getProductsSkeletons';
import { TProduct } from '../../model/types/IProductsSchema';
import { ProductListNotFound } from '../ProductListNotFound/ProductListNotFound';

interface ProductsProps {
  className?: string;
  isSuccess: boolean;
  products: TProduct[];
  limit: number;
  isLoading: boolean;
}

export const Products = memo((props: ProductsProps) => {
  const { className, limit, products, isLoading, isSuccess } = props;

  if (isSuccess && products.length == 0) {
    return (
      <div className={classNames(cls.ProductListError, {}, [className])}>
        <ProductListNotFound
          message={'Извините, но по вашему запросу ничего не найдено'}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.Products, {}, [className])}>
      {isSuccess &&
        products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      {isLoading && getProductsSkeletons(limit)}
    </div>
  );
});
