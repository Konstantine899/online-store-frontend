import { TSortOrder } from '../../model/types/IProductsSchema';
import { useCallback, useMemo } from 'react';
import { SelectOptions } from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useAddSortOrderToUrlParam } from '../hooks/useAddSortOrderToUrlParam';
import { useAddCurrentPageToUrlParam } from './useAddCurrentPageToUrlParam';

interface IUseProductsSortOrder {
  onFetchCb: (sort: TSortOrder) => void;
  onChangeCb: (value: TSortOrder) => void;
  sortFromState: TSortOrder;
}

export function useProductsSortOrder({
  onFetchCb,
  onChangeCb,
  sortFromState,
}: IUseProductsSortOrder): {
  selectOptions: SelectOptions<TSortOrder>[];
  onChange: (value: TSortOrder) => void;
  sort: TSortOrder;
} {
  const selectOptions = useMemo<SelectOptions<TSortOrder>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const { sort, addSortOrderToUrlParam } =
    useAddSortOrderToUrlParam(sortFromState);

  const { addCurrentPageToUrlParam } = useAddCurrentPageToUrlParam(1);

  const fetch = useCallback(() => {
    onFetchCb(sortFromState);
  }, [onFetchCb, sortFromState]);

  const debounce = useDebounce(fetch, 500);

  const onChange = useCallback(
    (value: TSortOrder) => {
      onChangeCb(value);
      addSortOrderToUrlParam(value);
      addCurrentPageToUrlParam(1);
      debounce();
    },
    [addCurrentPageToUrlParam, addSortOrderToUrlParam, debounce, onChangeCb],
  );

  return { selectOptions, onChange, sort };
}
