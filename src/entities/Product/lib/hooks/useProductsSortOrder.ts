import { TSortOrder } from '../../model/types/IProductsSchema';
import { useCallback, useMemo } from 'react';
import { SelectOptions } from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SORT } from '@/shared/consts/urlParams';
import { useSearchParams } from 'react-router-dom';

interface IUseProductsSortOrder {
  onFetchCb: (sort: TSortOrder) => void;
  onChangeCb: (value: TSortOrder) => void;
  sort: TSortOrder;
}

export function useProductsSortOrder({
  onFetchCb,
  onChangeCb,
  sort,
}: IUseProductsSortOrder): {
  selectOptions: SelectOptions<TSortOrder>[];
  onChange: (value: TSortOrder) => void;
  sort: TSortOrder;
} {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamSortOrder = searchParams.get(SORT) as TSortOrder;

  const selectOptions = useMemo<SelectOptions<TSortOrder>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetch = useCallback(() => {
    onFetchCb(sort);
  }, [onFetchCb, sort]);

  const debounce = useDebounce(fetch, 500);

  const addSortOrderToUrlParam = useCallback(
    (sort: TSortOrder) => {
      searchParams.set(SORT, sort);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const onChange = useCallback(
    (value: TSortOrder) => {
      onChangeCb(value);
      addSortOrderToUrlParam(value);
      debounce();
    },
    [addSortOrderToUrlParam, debounce, onChangeCb],
  );
  const isSortOrder = urlParamSortOrder ? urlParamSortOrder : sort;

  return { selectOptions, onChange, sort: isSortOrder };
}
