import { memo, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  ProductsByCategoryAndBrandActions,
  selectProductsByCategoryAndBrandLimit,
  TSortLimit,
  useProductsByCategoryAndBrand,
  useProductsLimit,
} from '@/entities/Product';
import { Limit } from '@/entities/Limit';

export const ProductsByCategoryAndBrandLimit = memo(() => {
  const dispatch = useAppDispatch();
  const productsByCategoryLimit = useSelector(
    selectProductsByCategoryAndBrandLimit,
  );
  const { brandId, categoryId } = useParams<{
    brandId: string;
    categoryId: string;
  }>();

  const [fetchProductsByCategoryAndBrand, { isSuccess, isLoading, data }] =
    useProductsByCategoryAndBrand();

  useEffect(() => {
    fetchProductsByCategoryAndBrand({
      categoryId: Number(categoryId),
      brandId: Number(brandId),
    });
  }, [brandId, categoryId, fetchProductsByCategoryAndBrand]);

  const { limit, selectOptions, onChange } = useProductsLimit({
    limitFromState: productsByCategoryLimit,
    onFetchCb,
    onChangeCb,
  });

  function onFetchCb() {
    fetchProductsByCategoryAndBrand({
      categoryId: Number(categoryId),
      brandId: Number(brandId),
    });
  }

  function onChangeCb(value: TSortLimit) {
    dispatch(ProductsByCategoryAndBrandActions.setLimit(Number(value)));
    dispatch(ProductsByCategoryAndBrandActions.setPage(1));
  }

  return (
    <Limit
      isLoading={isLoading}
      isSuccess={isSuccess}
      limit={limit}
      selectOptions={selectOptions}
      onChange={onChange}
    />
  );
});

ProductsByCategoryAndBrandLimit.displayName = `ProductsByCategoryAndBrandLimit`;
