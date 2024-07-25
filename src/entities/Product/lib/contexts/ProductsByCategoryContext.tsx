import { createContext, ReactNode, useContext, useEffect } from 'react';

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { IProductsSchema, TSortLimit } from '../../model/types/IProductsSchema';
import {
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
} from '../../model/selectors/selectProductsByCategory';
import { useProductsByCategory } from '../../api/productsApi';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { LIMIT } from '@/shared/consts/urlParams';

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
  const limit = useSelector(selectProductsByCategoryLimit);
  const sort = useSelector(selectProductsByCategorySort);
  const page = useSelector(selectProductsByCategoryCurrentPage);
  const [fetchProductsByCategory, { data, isSuccess, isLoading }] =
    useProductsByCategory();
  const [searchParams] = useSearchParams();
  const urlParamLimit = searchParams.get(LIMIT) as TSortLimit;

  const isLimit = urlParamLimit ? urlParamLimit : limit;

  useEffect(() => {
    dispatch(ProductsActions.setSearch(''));
    fetchProductsByCategory({
      categoryId: Number(categoryId),
      limit: Number(isLimit),
      sort,
      page,
    });
  }, [categoryId, dispatch, fetchProductsByCategory, isLimit, page, sort]);

  return (
    <ProductsByCategoryContext.Provider
      value={{ productsByCategory: data, isLoading, isSuccess }}
    >
      {children}
    </ProductsByCategoryContext.Provider>
  );
};
