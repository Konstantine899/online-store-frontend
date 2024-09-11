import { memo } from 'react';
import cls from './ProductsByCategoryPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import { useNavigate } from 'react-router-dom';
import {
  ProductsByCategoryActions,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
  useAddCurrentPageToUrlParam,
  useAddLimitToUrlParam,
  useAddSortOrderToUrlParam,
  useProductsByCategory,
  useProductsByCategoryContext,
} from '@/entities/Product';
import { getRouteProductsByCategory } from '@/shared/consts/router/publicRouter';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

export const ProductsByCategoryPaginate = memo(() => {
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
  const { addCurrentPageToUrlParam } = useAddCurrentPageToUrlParam(currentPage);

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
      <Paginate
        onPageChange={onPageChange}
        paginationRange={paginationRange}
        currentPage={currentPage}
        lastPage={lastPage}
        className={cls.ProductsByCategoryPaginate}
      />
    );
  }
});

ProductsByCategoryPaginate.displayName = `ProductsByCategoryPaginate`;
