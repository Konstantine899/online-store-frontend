import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductList.module.scss';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { Product } from '../../model/types/ProductsSchema';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/Text';
import { ProductListItemSkeleton } from '../ProductListItemSkeleton/ProductListItemSkeleton';
import { getLimit } from '@/entities/Paginate';
import { useSelector } from 'react-redux';

interface ProductProps {
  className?: string;
  products?: Product[];
  isLoading?: boolean;
}

const getSkeletons = (quantity: number) => {
  return new Array(quantity)
    .fill(0)
    .map((_, index) => <ProductListItemSkeleton key={index} />);
};

export const ProductList = memo((props: ProductProps) => {
  const { className, products, isLoading } = props;
  const limit = useSelector(getLimit);

  // const isLoading = true;

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
      {isLoading && getSkeletons(limit)}
    </div>
  );
});
