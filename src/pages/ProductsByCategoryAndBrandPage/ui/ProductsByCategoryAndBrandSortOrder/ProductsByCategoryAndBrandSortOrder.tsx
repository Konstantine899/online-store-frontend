import { memo, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  ProductsByCategoryAndBrandActions,
  selectProductsByCategoryAndBrandSort,
  TSortOrder,
  useProductsByCategoryAndBrand,
  useProductsSortOrder,
} from '@/entities/Product';
import { SortOrder } from '@/entities/SortOrder';

export const ProductsByCategoryAndBrandSortOrder = memo(() => {
  const dispatch = useAppDispatch();
  const sortOrder = useSelector(selectProductsByCategoryAndBrandSort);
  const { brandId, categoryId } = useParams<{
    brandId: string;
    categoryId: string;
  }>();
  const [fetchProductsByCategoryAndBrand, { data, isSuccess, isLoading }] =
    useProductsByCategoryAndBrand();

  useEffect(() => {
    fetchProductsByCategoryAndBrand({
      categoryId: Number(categoryId),
      brandId: Number(brandId),
    });
  }, [brandId, categoryId, fetchProductsByCategoryAndBrand]);

  const { sort, selectOptions, onChange } = useProductsSortOrder({
    sortFromState: sortOrder,
    onFetchCb,
    onChangeCb,
  });

  function onFetchCb() {
    fetchProductsByCategoryAndBrand({
      categoryId: Number(categoryId),
      brandId: Number(brandId),
    });
  }

  function onChangeCb(value: TSortOrder) {
    dispatch(ProductsByCategoryAndBrandActions.setSortingOrder(value));
    dispatch(ProductsByCategoryAndBrandActions.setPage(1));
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

ProductsByCategoryAndBrandSortOrder.displayName = `ProductsByCategoryAndBrandSortOrder`;
