import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

import { useNavigate } from 'react-router-dom';
import { getRouteProductsByCategory } from '@/shared/consts/router/publicRouter';
import { useProductsByCategory } from '../../api/productsApi';
import { useProductsByCategoryContext } from '../../lib/contexts/ProductsByCategoryContext';
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';

import {
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
} from '../../model/selectors/selectProductsByCategory';
import { useAddSortOrderToUrlParam } from '../../lib/hooks/useAddSortOrderToUrlParam';
import { useAddLimitToUrlParam } from '../../lib/hooks/useAddLimitToUrlParam';
import { useAddCurrentPageToUrlParam } from '../../lib/hooks/useAddCurrentPageToUrlParam';

interface ProductsByCategoryPaginateProps {
  className?: string;
}

export const ProductsByCategoryPaginate = memo(
  (props: ProductsByCategoryPaginateProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const categoryId = useSelector(selectCategoryId);
    const navigate = useNavigate();
    const [fetchProductsByCategory] = useProductsByCategory();
    const { productsByCategory, isSuccess } = useProductsByCategoryContext();
    const sortFromState = useSelector(selectProductsByCategorySort);
    const limitFromState = useSelector(selectProductsByCategoryLimit);

    const currentPage = productsByCategory
      ? productsByCategory.metaData.currentPage
      : 1;
    const lastPage = productsByCategory
      ? productsByCategory.metaData.lastPage
      : 1;

    const { sort, addSortOrderToUrlParam } =
      useAddSortOrderToUrlParam(sortFromState);
    const { limit, addLimitToUrlParam } = useAddLimitToUrlParam(limitFromState);
    const { addCurrentPageToUrlParam } =
      useAddCurrentPageToUrlParam(currentPage);

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryActions.setPage(pageNumber));
      navigate(getRouteProductsByCategory(`${categoryId}`));
      fetchProductsByCategory({ categoryId, page: pageNumber });
      addSortOrderToUrlParam(sort);
      addLimitToUrlParam(Number(limit));
      addCurrentPageToUrlParam(pageNumber);
    };

    const paginationRange = usePaginate({
      currentPage,
      lastPage,
    });

    if (isSuccess && productsByCategory) {
      return (
        <div
          className={classNames(cls.ProductsByCategoryPaginate, {}, [
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

ProductsByCategoryPaginate.displayName = `ProductsByCategoryPaginate`;
