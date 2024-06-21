import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { IProductsSchema } from '../../model/types/IProductsSchema';
import { useProducts } from '../../api/productsApi';
import {
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSearch,
  selectProductsSortOrder,
} from '../../model/selectors/selectProducts';

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

  useEffect(() => {
    fetchProducts({ search, limit, sort, page });
  }, [fetchProducts, limit, page, search, sort]);

  return (
    <ProductsContext.Provider value={{ products: data, isSuccess, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContext.displayName = `ProductsContext`;
