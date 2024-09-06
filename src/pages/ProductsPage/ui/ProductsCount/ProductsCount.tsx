import { memo, useEffect } from 'react';
import { useProductsContext } from '@/entities/Product';
import { useSearchParams } from 'react-router-dom';
import { Quantities } from '../../../../entities/Quantities';

export const ProductsCount = memo(() => {
  const { products, isSuccess, isLoading } = useProductsContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  useEffect(() => {
    setSearchParams(search);
  }, [search, setSearchParams]);

  return (
    <Quantities
      products={products}
      isSuccess={isSuccess}
      isLoading={isLoading}
      search={search}
    />
  );
});

ProductsCount.displayName = `ProductsCount`;
