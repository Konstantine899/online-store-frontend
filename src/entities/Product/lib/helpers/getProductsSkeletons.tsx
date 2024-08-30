import { ProductCardSkeleton } from '../../ui/ProductListItemSkeleton/ProductCardSkeleton';

export const getProductsSkeletons = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const limit: string | null = urlParams.get('limit');
  const isLimit: number = limit == null ? 5 : parseInt(limit);
  return new Array(isLimit)
    .fill(0)
    .map((_, index) => <ProductCardSkeleton key={index} />);
};
