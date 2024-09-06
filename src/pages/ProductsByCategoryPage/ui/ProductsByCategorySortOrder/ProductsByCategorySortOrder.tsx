import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  ProductsByCategoryActions,
  selectProductsByCategorySort,
  TSortOrder,
  useProductsByCategory,
  useProductsSortOrder,
} from '@/entities/Product';
import { SortOrder } from '@/entities/SortOrder';
import { useParams } from 'react-router';

export const ProductsByCategorySortOrder = memo(() => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams<{ categoryId: string }>();
  const productsByCategorySortOrder = useSelector(selectProductsByCategorySort);
  const [fetchProductsByCategory, { isLoading, isSuccess, data }] =
    useProductsByCategory();

  useEffect(() => {
    fetchProductsByCategory({ categoryId: Number(categoryId) });
  }, [categoryId, fetchProductsByCategory]);

  const { onChange, selectOptions, sort } = useProductsSortOrder({
    sortFromState: productsByCategorySortOrder,
    onFetchCb,
    onChangeCb,
  });

  function onFetchCb() {
    fetchProductsByCategory({ categoryId: Number(categoryId), sort });
  }

  function onChangeCb(value: TSortOrder) {
    dispatch(ProductsByCategoryActions.setSortingOrder(value));
    dispatch(ProductsByCategoryActions.setPage(1));
  }

  return (
    <SortOrder
      isLoading={isLoading}
      isSuccess={isSuccess}
      selectOptions={selectOptions}
      sort={sort}
      onChange={onChange}
      products={data}
    />
  );
});

ProductsByCategorySortOrder.displayName = `ProductsByCategorySortOrder`;
