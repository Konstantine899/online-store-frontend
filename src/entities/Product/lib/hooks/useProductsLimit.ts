import { useCallback, useMemo } from 'react';
import { TSortLimit } from '../../model/types/IProductsSchema';
import { SelectOptions } from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { LIMIT } from '@/shared/consts/urlParams';

interface UseProductsLimit {
  onFetchCb: (limit: number) => void;
  onChangeCb: (value: TSortLimit) => void;
  limit: number;
}

export function useProductsLimit({
  onFetchCb,
  onChangeCb,
  limit,
}: UseProductsLimit): {
  selectOptions: SelectOptions<TSortLimit>[];
  onChange: (value: TSortLimit) => void;
  limit: TSortLimit;
} {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamLimit = searchParams.get(LIMIT) as TSortLimit;

  const selectOptions = useMemo<SelectOptions<TSortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const addLimitToUrlParam = useCallback(
    (limit: number) => {
      if (limit > 5) {
        searchParams.set(LIMIT, `${limit}`);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(LIMIT);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const onFetch = useCallback(() => {
    onFetchCb(limit);
  }, [onFetchCb, limit]);

  const debounce = useDebounce(onFetch, 500);

  const onChange = useCallback(
    (value: TSortLimit) => {
      onChangeCb(value);
      addLimitToUrlParam(Number(value));
      debounce();
    },
    [addLimitToUrlParam, debounce, onChangeCb],
  );

  const isLimit = urlParamLimit
    ? urlParamLimit
    : (limit.toString() as TSortLimit);

  return { selectOptions, onChange, limit: isLimit };
}
