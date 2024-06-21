import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { IProductsSchema } from '../../model/types/IProductsSchema';
import {
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
} from '../../model/selectors/selectProductsByCategory';
import { useProductsByCategory } from '../../api/productsApi';

interface IProps {
  children: ReactNode;
}

interface IProductsByCategoryContext {
  productsByCategory?: IProductsSchema;
  isSuccess: boolean;
  isLoading: boolean;
}

const ProductsByCategoryContext = createContext<IProductsByCategoryContext>({
  isSuccess: false,
  isLoading: false,
});

export const useProductsByCategoryContext = () =>
  useContext(ProductsByCategoryContext);

export const ProductsByCategoryProvider = ({ children }: IProps) => {
  const { categoryId } = useParams();
  const limit = useSelector(selectProductsByCategoryLimit);
  const sort = useSelector(selectProductsByCategorySort);
  const page = useSelector(selectProductsByCategoryCurrentPage);
  const [fetchProductsByCategory, { data, isSuccess, isLoading }] =
    useProductsByCategory();

  useEffect(() => {
    fetchProductsByCategory({
      categoryId: Number(categoryId),
      limit,
      sort,
      page,
    });
  }, [categoryId, fetchProductsByCategory, limit, page, sort]);

  return (
    <ProductsByCategoryContext.Provider
      value={{ productsByCategory: data, isLoading, isSuccess }}
    >
      {children}
    </ProductsByCategoryContext.Provider>
  );
};
