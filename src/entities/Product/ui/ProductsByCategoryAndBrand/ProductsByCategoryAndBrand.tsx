import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrand.module.scss';
import { getProductsSkeletons } from '../../lib/helpers/getProductsSkeletons';
import { ProductsNotFound } from '@/entities/Product/ui/ProductsNotFound/ProductsNotFound';
import { useProductsByCategoryAndBrandContext } from '../../lib/contexts/ProductsByCategoryAndBrandContext';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductsByCategoryAndBrandProps {
  className?: string;
}

export const ProductsByCategoryAndBrand = memo(
  (props: ProductsByCategoryAndBrandProps) => {
    const { className } = props;
    const { productsByCategoryAndBrand, isSuccess, isLoading } =
      useProductsByCategoryAndBrandContext();

    if (isSuccess && productsByCategoryAndBrand?.rows.length == 0) {
      return (
        <div
          className={classNames(cls.ProductsByCategoryAndBrandError, {}, [
            className,
          ])}
        >
          <ProductsNotFound />
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrand, {}, [className])}
      >
        {isSuccess &&
          productsByCategoryAndBrand?.rows.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {isLoading && getProductsSkeletons()}
      </div>
    );
  },
);

ProductsByCategoryAndBrand.displayName = `ProductsByCategoryAndBrand`;
