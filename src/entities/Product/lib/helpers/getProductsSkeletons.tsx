import { ProductListItemSkeleton } from '../../ui/ProductListItemSkeleton/ProductListItemSkeleton';

export const getProductsSkeletons = (quantity: number | undefined) => {
  return new Array(quantity)
    .fill(0)
    .map((_, index) => <ProductListItemSkeleton key={index} />);
};
