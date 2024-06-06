import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsFilters.module.scss';
import {
  ProductsSortOrder,
  fetchProducts,
  ProductsActions,
  selectSortOrder,
  selectLimit,
} from '@/entities/Product';
import { useSelector } from 'react-redux';
import { ISortLimit, ISortOrder } from '@/shared/types/ISortOrder';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProductsLimit } from '@/entities/Product/ui/ProductsLimit/ProductsLimit';

interface ProductsFiltersProps {
  className?: string;
}

export const ProductsFilters = memo((props: ProductsFiltersProps) => {
  const { className } = props;
  const sortOrder = useSelector(selectSortOrder);
  const limit = useSelector(selectLimit);
  const dispatch = useAppDispatch();

  const onSortedList = () => {
    dispatch(fetchProducts());
  };

  const onSortedActions = (value: ISortOrder) => {
    dispatch(ProductsActions.setSortingOrder(value));
    dispatch(ProductsActions.setPage(1));
  };

  const onProductsLimit = () => {
    dispatch(fetchProducts());
  };

  const onChangeLimit = (value: ISortLimit) => {
    dispatch(ProductsActions.setLimit(Number(value)));
    dispatch(ProductsActions.setPage(1));
  };

  return (
    <div className={classNames(cls.ProductsFilters, {}, [className])}>
      <ProductsSortOrder
        sortOrder={sortOrder}
        onSortingOrder={onSortedList}
        onChangeSortingOrder={onSortedActions}
      />
      <ProductsLimit
        limit={`${limit}` as ISortLimit}
        onProductsLimit={onProductsLimit}
        onChangeLimit={onChangeLimit}
      />
    </div>
  );
});
