import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategory.module.scss';
import { getProductsSkeletons } from '../../lib/helpers/getProductsSkeletons';
import { ProductListNotFound } from '../ProductListNotFound/ProductListNotFound';
import { useProductsByCategoryContext } from '../../lib/contexts/ProductsByCategoryContext';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductsByCategoryProps {
  className?: string;
}

export const ProductsByCategory = memo((props: ProductsByCategoryProps) => {
  const { className } = props;
  const { productsByCategory, isLoading, isSuccess } =
    useProductsByCategoryContext();

  if (isSuccess && productsByCategory?.rows.length == 0) {
    return (
      <div className={classNames(cls.ProductsByCategoryError, {}, [className])}>
        <ProductListNotFound
          message={'Извините, но по вашему запросу ничего не найдено'}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProductsByCategory, {}, [className])}>
      {isSuccess &&
        productsByCategory?.rows.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      {isLoading && getProductsSkeletons()}
    </div>
  );
});

ProductsByCategory.displayName = `ProductsByCategory`;
