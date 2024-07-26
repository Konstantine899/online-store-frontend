import { useSearchParams } from 'react-router-dom';
import { LIMIT, PAGE } from '@/shared/consts/urlParams';
import { TSortLimit } from '../../model/types/IProductsSchema';
import { useCallback } from 'react';

interface UseAddLimitToUrlParamResponse {
  addLimitToUrlParam: (limit: number) => void;
  limit: TSortLimit;
}

export function useAddLimitToUrlParam(
  limit: number,
): UseAddLimitToUrlParamResponse {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamLimit = searchParams.get(LIMIT) as TSortLimit;

  const addLimitToUrlParam = useCallback(
    (limit: number) => {
      if (limit > 5) {
        searchParams.set(LIMIT, `${limit}`);
        setSearchParams(searchParams);
        searchParams.delete(PAGE);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(PAGE);
        setSearchParams(searchParams);
        searchParams.delete(LIMIT);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const isLimit = urlParamLimit
    ? urlParamLimit
    : (limit.toString() as TSortLimit);

  return { addLimitToUrlParam, limit: isLimit };
}
