import { useSearchParams } from 'react-router-dom';
import { PAGE } from '@/shared/consts/urlParams';
import { useCallback } from 'react';

interface IUseAddCurrentPageToUrlParam {
  addCurrentPageToUrlParam: (page: number) => void;
  page: number;
}

export function useAddCurrentPageToUrlParam(
  page: number,
): IUseAddCurrentPageToUrlParam {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get(PAGE);

  const addCurrentPageToUrlParam = useCallback(
    (page: number) => {
      if (page > 1) {
        searchParams.set(PAGE, `${page}`);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(PAGE);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const isCurrentPage = currentPage ? Number(currentPage) : page;

  return { addCurrentPageToUrlParam, page: isCurrentPage };
}
