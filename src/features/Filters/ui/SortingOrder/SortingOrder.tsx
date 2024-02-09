import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './SortingOrder.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FiltersActions } from '@/features/Filters/model/slices/FiltersSlice';
import { Sort } from '@/shared/types/sort';
import { FetchProducts } from '@/entities/Product/model/services/FetchProducts';
import { ProductsPageActions } from '@/entities/Product/model/slices/ProductsSlice';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useSelector } from 'react-redux';
import { getSortOrderSelector } from '@/features/Filters/model/selectors/getFilters';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';

interface SortingOrderProps {
  className?: string;
}

export const SortingOrder = memo((props: SortingOrderProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(getSortOrderSelector);

  const selectOptions = useMemo<SelectOptions<Sort>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  const debounceFilterOrder = useDebounce(fetchProductsList, 500);

  const onChange = (value: Sort) => {
    dispatch(FiltersActions.setSortingOrder(value));
    dispatch(ProductsPageActions.setPage(1));
    debounceFilterOrder();
  };

  return (
    <div className={classNames(cls.SortingOrder, {}, [className])}>
      <Select<Sort>
        label={'по'}
        options={selectOptions}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});
