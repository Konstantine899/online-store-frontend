import { ProductCardSkeleton } from '../../ui/ProductListItemSkeleton/ProductCardSkeleton';

export const getProductsSkeletons = (quantity: number | undefined) => {
  return new Array(quantity)
    .fill(0)
    .map((_, index) => <ProductCardSkeleton key={index} />);
};
