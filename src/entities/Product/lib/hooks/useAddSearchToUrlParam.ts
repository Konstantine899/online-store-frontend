import { useSelector } from 'react-redux';
import {
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSearch,
  selectProductsSortOrder,
} from '../../model/selectors/selectProducts';
import { useSearchParams } from 'react-router-dom';
import { LIMIT, PAGE, SEARCH, SORT } from '@/shared/consts/urlParams';
import { useCallback } from 'react';
import { TSortOrder } from '../../model/types/IProductsSchema';

interface IUseAddSearchToUrlParamResponse {
  search: string;
  addSearchToUrlParam: (search: string) => void;
}

export function useAddSearchToUrlParam(): IUseAddSearchToUrlParamResponse {
  const search = useSelector(selectProductsSearch);
  const page = useSelector(selectProductsCurrentPage);
  const limit = useSelector(selectProductsLimit);
  const sort = useSelector(selectProductsSortOrder);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamSearch = searchParams.get(SEARCH);
  const isSearch = urlParamSearch ? urlParamSearch : search;

  const addLimit = useCallback(
    (limit: string) => {
      if (Number(limit) > 5) {
        searchParams.set(LIMIT, `${limit}`);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const addSort = useCallback(
    (sort: TSortOrder) => {
      searchParams.set(SORT, `${sort}`);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const addSearchToUrlParam = useCallback(
    (search: string) => {
      if (search.length > 0) {
        searchParams.set(SEARCH, search);
        setSearchParams(searchParams);
        addLimit(`${limit}`);
        addSort(sort);
      }
      if (page > 1) {
        searchParams.set(PAGE, `${page}`);
        setSearchParams(searchParams);
      }

      addLimit(`${limit}`);
      addSort(sort);
    },
    [addLimit, addSort, limit, page, searchParams, setSearchParams, sort],
  );
  return { search: isSearch, addSearchToUrlParam };
}
