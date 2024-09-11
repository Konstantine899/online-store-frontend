import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import {
  ProductsByCategoryAndBrandActions,
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandSort,
  useAddCurrentPageToUrlParam,
  useAddLimitToUrlParam,
  useAddSortOrderToUrlParam,
  useProductsByCategoryAndBrand,
  useProductsByCategoryAndBrandContext,
} from '@/entities/Product';
import { useSelector } from 'react-redux';
import { getRouteProductsByCategoryAndBrand } from '@/shared/consts/router/publicRouter';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

export const ProductsByCategoryAndBrandPaginate = memo(() => {
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
  const { addCurrentPageToUrlParam } = useAddCurrentPageToUrlParam(currentPage);

  const onPageChange = (pageNumber: number) => {
    dispatch(ProductsByCategoryAndBrandActions.setPage(pageNumber));
    navigate(getRouteProductsByCategoryAndBrand(`${brandId}`, `${categoryId}`));
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
      <Paginate
        onPageChange={onPageChange}
        paginationRange={paginationRange}
        currentPage={currentPage}
        lastPage={lastPage}
        className={cls.ProductsByCategoryAndBrandPaginate}
      />
    );
  }
});

ProductsByCategoryAndBrandPaginate.displayName = `ProductsByCategoryAndBrandPaginate`;
