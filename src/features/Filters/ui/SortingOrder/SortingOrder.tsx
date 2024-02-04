import { classNames } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import cls from './SortingOrder.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FiltersActions } from '@/features/Filters/model/slices/FiltersSlice';
import { Sort } from '@/shared/types/sort';
import { fetchProductsListPage } from '@/pages/ProductsPage/model/services/fetchProductsListPage/fetchProductsListPage';
import { ProductsPageActions } from '@/pages/ProductsPage/model/slices/ProductsPageSlice';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useSelector } from 'react-redux';
import { getSortOrderSelector } from '@/features/Filters/model/selectors/getFilters';

interface SelectOptions {
  value: string;
  content: string;
}

interface SortingOrderProps {
  className?: string;
}

export const SortingOrder = memo((props: SortingOrderProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(getSortOrderSelector);

  const selectOptions = useMemo<SelectOptions[]>(
    () => [
      { value: 'asc', content: 'По возрастанию' },
      { value: 'desc', content: 'По убыванию' },
    ],
    [],
  );

  const optionsList = useMemo(
    () =>
      selectOptions?.map((element) => (
        <option key={element.value} value={element.value}>
          {element.content}
        </option>
      )),
    [selectOptions],
  );

  const fetchProductsList = useCallback(() => {
    dispatch(fetchProductsListPage());
  }, [dispatch]);

  const debounceFilterOrder = useDebounce(fetchProductsList, 500);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(FiltersActions.setSortingOrder(event.target.value as Sort));
    dispatch(ProductsPageActions.setPage(1));
    debounceFilterOrder();
  };

  return (
    <div className={classNames(cls.SortingOrder, {}, [className])}>
      <select onChange={onChange} value={value}>
        {optionsList}
      </select>
    </div>
  );
});
