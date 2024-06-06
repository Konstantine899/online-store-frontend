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

interface ProductsSortOrderProps {
  className?: string;
  sortOrder: ISortOrder;
  onSortingOrder: () => void;
  onChangeSortingOrder: (value: ISortOrder) => void;
}

export const ProductsSortOrder = memo((props: ProductsSortOrderProps) => {
  const { className, sortOrder, onSortingOrder, onChangeSortingOrder } = props;

  const selectOptions = useMemo<SelectOptions<ISortOrder>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetchSortingOrder = useCallback(() => {
    onSortingOrder();
  }, [onSortingOrder]);

  const debounceFilterOrder = useDebounce(fetchSortingOrder, 500);

  const onChange = useCallback(
    (value: ISortOrder) => {
      onChangeSortingOrder(value);
      debounceFilterOrder();
    },
    [debounceFilterOrder, onChangeSortingOrder],
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
