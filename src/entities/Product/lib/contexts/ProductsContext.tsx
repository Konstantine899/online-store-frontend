import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import { useSelector } from 'react-redux';
import {
  IProductsSchema,
  TSortLimit,
  TSortOrder,
} from '../../model/types/IProductsSchema';
import { useProducts } from '../../api/productsApi';
import {
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSearch,
  selectProductsSortOrder,
} from '../../model/selectors/selectProducts';
import { useSearchParams } from 'react-router-dom';
import { LIMIT, SEARCH, SORT } from '@/shared/consts/urlParams';

interface IProps {
  children: ReactNode;
}

interface IProductContext {
  products?: IProductsSchema;
  isLoading: boolean;
  isSuccess: boolean;
}

const ProductsContext = createContext<IProductContext>({
  isLoading: false,
  isSuccess: false,
});

export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }: IProps) => {
  const [fetchProducts, { data, isSuccess, isLoading }] = useProducts();
  const search = useSelector(selectProductsSearch);
  const page = useSelector(selectProductsCurrentPage);
  const sort = useSelector(selectProductsSortOrder);
  const limit = useSelector(selectProductsLimit);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamLimit = searchParams.get(LIMIT) as TSortLimit;
  const urlParamSortOrder = searchParams.get(SORT) as TSortOrder;
  const urlParamSearch = searchParams.get(SEARCH);

  const isLimit = urlParamLimit ? urlParamLimit : limit;
  const isSortOrder = urlParamSortOrder ? urlParamSortOrder : sort;
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

  useEffect(() => {
    fetchProducts({
      search: isSearch,
      limit: Number(isLimit),
      sort: isSortOrder,
      page,
    });
    addSearchToUrlParam(search);
  }, [
    fetchProducts,
    isLimit,
    page,
    isSearch,
    isSortOrder,
    addSearchToUrlParam,
    search,
  ]);

  return (
    <ProductsContext.Provider value={{ products: data, isSuccess, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContext.displayName = `ProductsContext`;
