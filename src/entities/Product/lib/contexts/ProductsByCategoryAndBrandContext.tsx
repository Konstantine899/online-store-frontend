import { createContext, ReactNode, useContext, useEffect } from 'react';
import { IProductsSchema, TSortLimit } from '../../model/types/IProductsSchema';

import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandSort,
} from '../../model/selectors/selectProductsByCategoryAndBrand';
import { useProductsByCategoryAndBrand } from '../../api/productsApi';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { LIMIT } from '@/shared/consts/urlParams';

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
  const limit = useSelector(selectProductsByCategoryAndBrandLimit);
  const sort = useSelector(selectProductsByCategoryAndBrandSort);
  const page = useSelector(selectProductsByCategoryAndBrandCurrentPage);
  const [fetchProductsByCategoryAndBrand, { data, isSuccess, isLoading }] =
    useProductsByCategoryAndBrand();
  const [searchParams] = useSearchParams();
  const urlParamLimit = searchParams.get(LIMIT) as TSortLimit;

  const isLimit = urlParamLimit ? urlParamLimit : limit;

  useEffect(() => {
    dispatch(ProductsActions.setSearch(''));
    fetchProductsByCategoryAndBrand({
      brandId: Number(brandId),
      categoryId: Number(categoryId),
      sort,
      page,
      limit: Number(isLimit),
    });
  }, [
    categoryId,
    brandId,
    dispatch,
    fetchProductsByCategoryAndBrand,
    sort,
    page,
    isLimit,
  ]);

  return (
    <ProductsByCategoryAndBrandContext.Provider
      value={{ productsByCategoryAndBrand: data, isSuccess, isLoading }}
    >
      {children}
    </ProductsByCategoryAndBrandContext.Provider>
  );
};
