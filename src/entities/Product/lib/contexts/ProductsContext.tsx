import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { IProductsSchema } from '../../model/types/IProductsSchema';
import { useProducts } from '../../api/productsApi';
import {
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSortOrder,
} from '../../model/selectors/selectProducts';
import { useAddSearchToUrlParam } from '../hooks/useAddSearchToUrlParam';
import { useAddLimitToUrlParam } from '../hooks/useAddLimitToUrlParam';
import { useAddSortOrderToUrlParam } from '../hooks/useAddSortOrderToUrlParam';

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
  const sortFromState = useSelector(selectProductsSortOrder);
  const limitFromState = useSelector(selectProductsLimit);

  const { search, addSearchToUrlParam } = useAddSearchToUrlParam();
  const { limit } = useAddLimitToUrlParam(limitFromState);
  const { sort } = useAddSortOrderToUrlParam(sortFromState);

  useEffect(() => {
    fetchProducts({
      search,
      limit: Number(limit),
      sort,
      page,
    });
    addSearchToUrlParam(search);
  }, [fetchProducts, limit, page, search, addSearchToUrlParam, sort]);

  return (
    <ProductsContext.Provider value={{ products: data, isSuccess, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContext.displayName = `ProductsContext`;
