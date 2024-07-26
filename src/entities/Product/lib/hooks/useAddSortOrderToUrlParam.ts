import { TSortOrder } from '../../model/types/IProductsSchema';
import { useSearchParams } from 'react-router-dom';
import { PAGE, SORT } from '@/shared/consts/urlParams';
import { useCallback } from 'react';

interface IUseAddSortOrderToUrlParamResponse {
  addSortOrderToUrlParam: (sort: TSortOrder) => void;
  sort: TSortOrder;
}

export function useAddSortOrderToUrlParam(
  sort: TSortOrder,
): IUseAddSortOrderToUrlParamResponse {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamSortOrder = searchParams.get(SORT) as TSortOrder;

  const addSortOrderToUrlParam = useCallback(
    (sort: TSortOrder) => {
      searchParams.set(SORT, sort);
      setSearchParams(searchParams);
      searchParams.delete(PAGE);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const isSortOrder = urlParamSortOrder ? urlParamSortOrder : sort;

  return { addSortOrderToUrlParam, sort: isSortOrder };
}
