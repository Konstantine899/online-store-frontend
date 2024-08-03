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
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAddLimitToUrlParam } from '../hooks/useAddLimitToUrlParam';
import { useAddSortOrderToUrlParam } from '../hooks/useAddSortOrderToUrlParam';
import { useAddCurrentPageToUrlParam } from '../hooks/useAddCurrentPageToUrlParam';

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
  const dispatch = useAppDispatch();
  const limitFromState = useSelector(selectProductsByCategoryLimit);
  const sortFromState = useSelector(selectProductsByCategorySort);
  const pageFromState = useSelector(selectProductsByCategoryCurrentPage);
  const [fetchProductsByCategory, { data, isSuccess, isLoading }] =
    useProductsByCategory();

  const { limit } = useAddLimitToUrlParam(limitFromState);
  const { sort } = useAddSortOrderToUrlParam(sortFromState);
  const { page } = useAddCurrentPageToUrlParam(pageFromState);

  useEffect(() => {
    dispatch(ProductsActions.setSearch(''));
    fetchProductsByCategory({
      categoryId: Number(categoryId),
      limit: Number(limit),
      sort,
      page,
    });
  }, [categoryId, dispatch, fetchProductsByCategory, limit, sort, page]);

  return (
    <ProductsByCategoryContext.Provider
      value={{ productsByCategory: data, isLoading, isSuccess }}
    >
      {children}
    </ProductsByCategoryContext.Provider>
  );
};
