import { ProductCardSkeleton } from '../../ui/ProductListItemSkeleton/ProductCardSkeleton';

export const getProductsSkeletons = () => {
  return new Array(5)
    .fill(0)
    .map((_, index) => <ProductCardSkeleton key={index} />);
};
