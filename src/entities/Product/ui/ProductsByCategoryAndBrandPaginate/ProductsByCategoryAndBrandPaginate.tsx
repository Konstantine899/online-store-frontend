import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';
import { useNavigate } from 'react-router-dom';
import { getRouteProductsByCategoryAndBrand } from '@/shared/consts/router/publicRouter';
import { useProductsByCategoryAndBrand } from '../../api/productsApi';
import { useProductsByCategoryAndBrandContext } from '../../lib/contexts/ProductsByCategoryAndBrandContext';
import { ProductsByCategoryAndBrandActions } from '../../model/slices/ProductsByCategoryAndBrandSlice';
import { useSelector } from 'react-redux';

import { useAddSortOrderToUrlParam } from '../../lib/hooks/useAddSortOrderToUrlParam';
import { useAddLimitToUrlParam } from '../../lib/hooks/useAddLimitToUrlParam';
import { useAddCurrentPageToUrlParam } from '../../lib/hooks/useAddCurrentPageToUrlParam';
import {
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandSort,
} from '../../model/selectors/selectProductsByCategoryAndBrand';

interface ProductsByCategoryAndBrandPaginateProps {
  className?: string;
}

export const ProductsByCategoryAndBrandPaginate = memo(
  (props: ProductsByCategoryAndBrandPaginateProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { categoryId, brandId } = useParams();
    const navigate = useNavigate();
    const [fetchProductsByCategoryAndBrand] = useProductsByCategoryAndBrand();
    const { productsByCategoryAndBrand, isSuccess } =
      useProductsByCategoryAndBrandContext();
    const sortFromState = useSelector(selectProductsByCategoryAndBrandSort);
    const limitFromState = useSelector(selectProductsByCategoryAndBrandLimit);

    const currentPage = productsByCategoryAndBrand
      ? productsByCategoryAndBrand.metaData.currentPage
      : 1;

    const lastPage = productsByCategoryAndBrand
      ? productsByCategoryAndBrand.metaData.lastPage
      : 1;

    const { sort, addSortOrderToUrlParam } =
      useAddSortOrderToUrlParam(sortFromState);
    const { limit, addLimitToUrlParam } = useAddLimitToUrlParam(limitFromState);
    const { addCurrentPageToUrlParam } =
      useAddCurrentPageToUrlParam(currentPage);

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryAndBrandActions.setPage(pageNumber));
      navigate(
        getRouteProductsByCategoryAndBrand(`${brandId}`, `${categoryId}`),
      );
      fetchProductsByCategoryAndBrand({
        brandId: Number(brandId),
        categoryId: Number(categoryId),
        page: pageNumber,
      });
      addSortOrderToUrlParam(sort);
      addLimitToUrlParam(Number(limit));
      addCurrentPageToUrlParam(pageNumber);
    };

    const paginationRange = usePaginate({
      currentPage,
      lastPage,
    });

    if (isSuccess && productsByCategoryAndBrand) {
      return (
        <div
          className={classNames(cls.ProductsByCategoryAndBrandPaginate, {}, [
            className,
          ])}
        >
          <Paginate
            onPageChange={onPageChange}
            paginationRange={paginationRange}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        </div>
      );
    }
  },
);

ProductsByCategoryAndBrandPaginate.displayName = `ProductsByCategoryAndBrandPaginate`;
