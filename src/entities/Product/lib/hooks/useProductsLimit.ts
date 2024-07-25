import { useCallback, useMemo } from 'react';
import { TSortLimit } from '../../model/types/IProductsSchema';
import { SelectOptions } from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useAddLimitToUrlParam } from '../hooks/useAddLimitToUrlParam';

interface UseProductsLimit {
  onFetchCb: (limit: number) => void;
  onChangeCb: (value: TSortLimit) => void;
  limitFromState: number;
}

export function useProductsLimit({
  onFetchCb,
  onChangeCb,
  limitFromState,
}: UseProductsLimit): {
  selectOptions: SelectOptions<TSortLimit>[];
  onChange: (value: TSortLimit) => void;
  limit: TSortLimit;
} {
  const selectOptions = useMemo<SelectOptions<TSortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const { limit, addLimitToUrlParam } = useAddLimitToUrlParam(limitFromState);

  const onFetch = useCallback(() => {
    onFetchCb(limitFromState);
  }, [onFetchCb, limitFromState]);

  const debounce = useDebounce(onFetch, 500);

  const onChange = useCallback(
    (value: TSortLimit) => {
      onChangeCb(value);
      addLimitToUrlParam(Number(value));
      debounce();
    },
    [addLimitToUrlParam, debounce, onChangeCb],
  );

  return { selectOptions, onChange, limit };
}
