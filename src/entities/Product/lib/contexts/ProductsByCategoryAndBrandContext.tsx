import { createContext, ReactNode, useContext, useEffect } from 'react';
import { IProductsSchema } from '../../model/types/IProductsSchema';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandSort,
} from '../../model/selectors/selectProductsByCategoryAndBrand';
import { useProductsByCategoryAndBrand } from '../../api/productsApi';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useAddLimitToUrlParam } from '../hooks/useAddLimitToUrlParam';
import { useAddSortOrderToUrlParam } from '../hooks/useAddSortOrderToUrlParam';
import { useAddCurrentPageToUrlParam } from '../hooks/useAddCurrentPageToUrlParam';

interface IProps {
  children: ReactNode;
}

interface IProductsByCategoryAndBrandContext {
  productsByCategoryAndBrand?: IProductsSchema;
  isSuccess: boolean;
  isLoading: boolean;
}

const ProductsByCategoryAndBrandContext =
  createContext<IProductsByCategoryAndBrandContext>({
    isLoading: false,
    isSuccess: false,
  });

export const useProductsByCategoryAndBrandContext = () =>
  useContext(ProductsByCategoryAndBrandContext);

export const ProductsByCategoryAndBrandProvider = ({ children }: IProps) => {
  const { brandId, categoryId } = useParams();
  const dispatch = useAppDispatch();
  const limitFromState = useSelector(selectProductsByCategoryAndBrandLimit);
  const sortFromState = useSelector(selectProductsByCategoryAndBrandSort);
  const pageFromState = useSelector(
    selectProductsByCategoryAndBrandCurrentPage,
  );
  const [fetchProductsByCategoryAndBrand, { data, isSuccess, isLoading }] =
    useProductsByCategoryAndBrand();

  const { limit } = useAddLimitToUrlParam(limitFromState);
  const { sort } = useAddSortOrderToUrlParam(sortFromState);
  const { page } = useAddCurrentPageToUrlParam(pageFromState);

  useEffect(() => {
    dispatch(ProductsActions.setSearch(''));
    fetchProductsByCategoryAndBrand({
      brandId: Number(brandId),
      categoryId: Number(categoryId),
      sort,
      page,
      limit: Number(limit),
    });
  }, [
    categoryId,
    brandId,
    dispatch,
    fetchProductsByCategoryAndBrand,
    sort,
    page,
    limit,
  ]);

  return (
    <ProductsByCategoryAndBrandContext.Provider
      value={{ productsByCategoryAndBrand: data, isSuccess, isLoading }}
    >
      {children}
    </ProductsByCategoryAndBrandContext.Provider>
  );
};
