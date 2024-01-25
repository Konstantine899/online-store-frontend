import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { Product } from '@/pages/ProductsPage/model/types/ProductsPageSchema';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/Text';
import { ProductListItemSkeleton } from '@/entities/Product/ui/ProductListItemSkeleton/ProductListItemSkeleton';

interface ProductProps {
  className?: string;
  products?: Product[];
  isLoading?: boolean;
}

const getSkeletons = () =>
  new Array(12)
    .fill(0)
    .map((_, index) => <ProductListItemSkeleton key={index} />);

export const ProductList = memo((props: ProductProps) => {
  const { className, products, isLoading } = props;

  if (!isLoading && !products.length) {
    return (
      <div className={classNames(cls.ProductListError, {}, [className])}>
        <Text
          size={TextSize.L}
          text={'Извините, но по вашему запросу ничего не найдено'}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProductList, {}, [className])}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
      {isLoading && getSkeletons()}
    </div>
  );
});
