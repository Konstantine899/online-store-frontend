import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { IProductsSchema, TSortOrder } from '../../model/types/IProductsSchema';
import { useProducts } from '../../api/productsApi';
import {
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSortOrder,
} from '../../model/selectors/selectProducts';
import { useSearchParams } from 'react-router-dom';
import { SORT } from '@/shared/consts/urlParams';
import { useAddSearchToUrlParam } from '../hooks/useAddSearchToUrlParam';
import { useAddLimitToUrlParam } from '../hooks/useAddLimitToUrlParam';

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
  const page = useSelector(selectProductsCurrentPage);
  const sort = useSelector(selectProductsSortOrder);
  const limitFromState = useSelector(selectProductsLimit);
  const [searchParams] = useSearchParams();
  const urlParamSortOrder = searchParams.get(SORT) as TSortOrder;

  const isSortOrder = urlParamSortOrder ? urlParamSortOrder : sort;

  const { search, addSearchToUrlParam } = useAddSearchToUrlParam();
  const { limit } = useAddLimitToUrlParam(limitFromState);

  useEffect(() => {
    fetchProducts({
      search,
      limit: Number(limit),
      sort: isSortOrder,
      page,
    });
    addSearchToUrlParam(search);
  }, [fetchProducts, limit, page, search, isSortOrder, addSearchToUrlParam]);

  return (
    <ProductsContext.Provider value={{ products: data, isSuccess, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContext.displayName = `ProductsContext`;
