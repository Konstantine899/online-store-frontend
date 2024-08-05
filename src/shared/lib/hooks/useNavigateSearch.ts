import { createSearchParams, useNavigate } from 'react-router-dom';
import { URLSearchParamsInit } from 'react-router-dom/dist/dom';
import { LIMIT, SORT } from '@/shared/consts/urlParams';

export function useNavigateSearch() {
  const navigate = useNavigate();
  return (pathname: string, params: URLSearchParamsInit) => {
    const newParams = transformParams(params);
    navigate({
      pathname,
      search: `?${createSearchParams(newParams)}`,
    });
  };
}

function transformParams(params: URLSearchParamsInit): URLSearchParamsInit {
  const newParams: any[][] = [];
  Object.entries(params).forEach(([key, value]: [string, any]) => {
    if (key === LIMIT && value > 5) {
      newParams.push([key, value]);
    }
    if (key === SORT) {
      newParams.push([key, value]);
    }
  });
  return Object.fromEntries(newParams);
}
