import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './SortingOrder.module.scss';
import { FiltersActions, getSortOrderSelector } from '@/features/Filters';
import {
  FetchProducts,
  FetchProductsByBrand,
  ProductsPageActions,
} from '@/entities/Product';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Select, SelectOptions } from '@/shared/ui/Select/Select';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Sort } from '@/shared/types/sort';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getBrandSelector } from '@/entities/Brand';

interface SortingOrderProps {
  className?: string;
}

export const SortingOrder = memo((props: SortingOrderProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(getSortOrderSelector);
  const brandId = useSelector(getBrandSelector);

  const selectOptions = useMemo<SelectOptions<Sort>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    if (brandId) return dispatch(FetchProductsByBrand({ brandId }));
    dispatch(FetchProducts());
  }, [brandId, dispatch]);

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
