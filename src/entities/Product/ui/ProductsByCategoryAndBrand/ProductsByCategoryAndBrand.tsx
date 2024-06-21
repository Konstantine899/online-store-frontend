import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrand.module.scss';
import { getProductsSkeletons } from '../../lib/helpers/getProductsSkeletons';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { TProduct } from '../../model/types/IProductsSchema';
import { ProductListNotFound } from '../ProductListNotFound/ProductListNotFound';

interface ProductsByCategoryAndBrandProps {
  className?: string;
  isSuccess: boolean;
  products: TProduct[];
  limit: number;
  isLoading: boolean;
}

export const ProductsByCategoryAndBrand = memo(
  (props: ProductsByCategoryAndBrandProps) => {
    const { className, limit, products, isLoading, isSuccess } = props;

    if (isSuccess && products.length == 0) {
      return (
        <div
          className={classNames(cls.ProductsByCategoryAndBrandError, {}, [
            className,
          ])}
        >
          <ProductListNotFound
            message={'Извините, но по вашему запросу ничего не найдено'}
          />
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrand, {}, [className])}
      >
        {isSuccess &&
          products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        {isLoading && getProductsSkeletons(limit)}
      </div>
    );
  },
);

ProductsByCategoryAndBrand.displayName = `ProductsByCategoryAndBrand`;
