import { memo } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ProductsActions,
  selectProductsSortOrder,
  TSortOrder,
  useProducts,
  useProductsContext,
  useProductsSortOrder,
} from '@/entities/Product';
import { SortOrder } from '@/entities/SortOrder';

export const ProductsSortOrder = memo(() => {
  const dispatch = useAppDispatch();
  const sortOrder = useSelector(selectProductsSortOrder);
  const [fetchProducts] = useProducts();
  const { products, isSuccess, isLoading } = useProductsContext();

  const { sort, selectOptions, onChange } = useProductsSortOrder({
    onFetchCb,
    onChangeCb,
    sortFromState: sortOrder,
  });

  function onFetchCb() {
    fetchProducts({ sort });
  }

  function onChangeCb(value: TSortOrder) {
    dispatch(ProductsActions.setSortingOrder(value));
    dispatch(ProductsActions.setPage(1));
  }

  return (
    <SortOrder
      isSuccess={isSuccess}
      isLoading={isLoading}
      selectOptions={selectOptions}
      sort={sort}
      onChange={onChange}
      products={products}
    />
  );
});

ProductsSortOrder.displayName = `ProductsSortOrder`;
