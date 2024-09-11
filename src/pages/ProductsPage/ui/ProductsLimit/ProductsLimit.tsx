import { memo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ProductsActions,
  selectProductsLimit,
  TSortLimit,
  useProducts,
  useProductsContext,
  useProductsLimit,
} from '@/entities/Product';
import { Limit } from '@/entities/Limit';

export const ProductsLimit = memo(() => {
  const dispatch = useAppDispatch();
  const productsLimit = useSelector(selectProductsLimit);
  const [fetchProducts] = useProducts();
  const { products, isSuccess, isLoading } = useProductsContext();

  const { onChange, selectOptions, limit } = useProductsLimit({
    onFetchCb: fetchCb,
    onChangeCb: onChangeCb,
    limitFromState: productsLimit,
  });

  function fetchCb(limit: number) {
    fetchProducts({ limit: Number(limit) });
  }

  function onChangeCb(value: TSortLimit) {
    dispatch(ProductsActions.setLimit(Number(value)));
    dispatch(ProductsActions.setPage(1));
  }

  return (
    <Limit
      isSuccess={isSuccess}
      isLoading={isLoading}
      limit={limit}
      selectOptions={selectOptions}
      onChange={onChange}
      products={products}
    />
  );
});

ProductsLimit.displayName = `ProductsLimit`;
