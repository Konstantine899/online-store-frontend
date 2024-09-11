import { memo, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ProductsByCategoryActions,
  selectProductsByCategoryLimit,
  TSortLimit,
  useProductsByCategory,
  useProductsLimit,
} from '@/entities/Product';
import { Limit } from '@/entities/Limit';
import { useParams } from 'react-router';

export const ProductsByCategoryLimit = memo(() => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams<{ categoryId: string }>();
  const productsByCategoryLimit = useSelector(selectProductsByCategoryLimit);
  const [
    fetchProductsByCategory,
    { isLoading, isSuccess, data: productsByCategory },
  ] = useProductsByCategory();

  useEffect(() => {
    fetchProductsByCategory({ categoryId: Number(categoryId) });
  }, [categoryId, fetchProductsByCategory]);

  const { limit, onChange, selectOptions } = useProductsLimit({
    onFetchCb,
    onChangeCb,
    limitFromState: productsByCategoryLimit,
  });

  function onFetchCb() {
    fetchProductsByCategory({
      categoryId: Number(categoryId),
      limit: Number(limit),
    });
  }

  function onChangeCb(limit: TSortLimit) {
    dispatch(ProductsByCategoryActions.setLimit(Number(limit)));
    dispatch(ProductsByCategoryActions.setPage(1));
  }

  return (
    <Limit
      isLoading={isLoading}
      isSuccess={isSuccess}
      limit={limit}
      selectOptions={selectOptions}
      onChange={onChange}
      products={productsByCategory}
    />
  );
});

ProductsByCategoryLimit.displayName = `ProductsByCategoryLimit`;
