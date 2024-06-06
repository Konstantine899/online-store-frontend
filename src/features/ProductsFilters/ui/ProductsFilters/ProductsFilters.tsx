import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsFilters.module.scss';
import { ProductsSortOrder } from '@/entities/Product';
import { useSelector } from 'react-redux';
import {
  fetchProducts,
  ProductsActions,
  selectSortOrder,
} from '@/entities/Product';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface ProductsFiltersProps {
  className?: string;
}

export const ProductsFilters = memo((props: ProductsFiltersProps) => {
  const { className } = props;
  const sortOrder = useSelector(selectSortOrder);
  const dispatch = useAppDispatch();

  const onSortedList = () => {
    dispatch(fetchProducts());
  };

  const onActions = (value: ISortOrder) => {
    dispatch(ProductsActions.setSortingOrder(value));
    dispatch(ProductsActions.setPage(1));
  };

  return (
    <div className={classNames(cls.ProductsFilters, {}, [className])}>
      <ProductsSortOrder
        sortOrder={sortOrder}
        onSortedList={onSortedList}
        onActions={onActions}
      />
    </div>
  );
});
