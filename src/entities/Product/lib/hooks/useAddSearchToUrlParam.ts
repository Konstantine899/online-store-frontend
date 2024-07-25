import { useSelector } from 'react-redux';
import { selectProductsSearch } from '../../model/selectors/selectProducts';
import { useSearchParams } from 'react-router-dom';
import { SEARCH } from '@/shared/consts/urlParams';
import { useCallback } from 'react';

interface IUseAddSearchToUrlParamResponse {
  search: string;
  addSearchToUrlParam: (search: string) => void;
}

export function useAddSearchToUrlParam(): IUseAddSearchToUrlParamResponse {
  const search = useSelector(selectProductsSearch);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamSearch = searchParams.get(SEARCH);
  const isSearch = urlParamSearch ? urlParamSearch : search;

  const addSearchToUrlParam = useCallback(
    (search: string) => {
      if (search.length > 0) {
        searchParams.set(SEARCH, search);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );
  return { search: isSearch, addSearchToUrlParam };
}
