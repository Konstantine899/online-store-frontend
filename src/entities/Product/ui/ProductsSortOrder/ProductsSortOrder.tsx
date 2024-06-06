import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsSortOrder.module.scss';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import {
  fetchProducts,
  ProductsActions,
  selectSortOrder,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

interface ProductsSortOrderProps {
  className?: string;
}

export const ProductsSortOrder = memo((props: ProductsSortOrderProps) => {
  const { className } = props;
  const sortOrder = useSelector(selectSortOrder);
  const dispatch = useAppDispatch();

  const selectOptions = useMemo<SelectOptions<ISortOrder>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetchSortingOrder = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const debounceFilterOrder = useDebounce(fetchSortingOrder, 500);

  const onChange = useCallback(
    (value: ISortOrder) => {
      dispatch(ProductsActions.setSortingOrder(value));
      dispatch(ProductsActions.setPage(1));
      debounceFilterOrder();
    },
    [debounceFilterOrder, dispatch],
  );

  return (
    <div className={classNames(cls.ProductsSortOrder, {}, [className])}>
      <Select<ISortOrder>
        options={selectOptions}
        label={'По'}
        active={sortOrder}
        onChange={onChange}
        WrapperWidth={WrapperWidth.XL}
        SelectWidth={SelectWidth.XL}
      />
    </div>
  );
});
