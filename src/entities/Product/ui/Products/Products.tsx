import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Products.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { getProductsSkeletons } from '../../lib/helpers/getProductsSkeletons';
import { ProductListNotFound } from '../ProductListNotFound/ProductListNotFound';
import { useProductsContext } from '../../lib/contexts/ProductsContext';

interface ProductsProps {
  className?: string;
}

export const Products = memo((props: ProductsProps) => {
  const { className } = props;

  const { products, isLoading, isSuccess } = useProductsContext();

  if (isSuccess && products?.rows.length == 0) {
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
        products?.rows.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      {isLoading && products && getProductsSkeletons(products?.metaData.limit)}
    </div>
  );
});

Products.displayName = `Products`;
