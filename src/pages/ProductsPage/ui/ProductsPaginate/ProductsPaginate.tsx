import { memo } from 'react';
import { Paginate } from '@/entities/Paginate';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import {
  ProductsActions,
  selectProductsLimit,
  selectProductsSortOrder,
  useAddCurrentPageToUrlParam,
  useAddLimitToUrlParam,
  useAddSortOrderToUrlParam,
  useProducts,
  useProductsContext,
} from '@/entities/Product';
import { useSelector } from 'react-redux';

import { getRouteProducts } from '@/shared/consts/router/publicRouter';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

export const ProductsPaginate = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [fetchProducts] = useProducts();
  const { products, isSuccess } = useProductsContext();
  const sortFromState = useSelector(selectProductsSortOrder);
  const limitFromState = useSelector(selectProductsLimit);

  const currentPage = products ? products.metaData.currentPage : 1;
  const lastPage = products ? products.metaData.lastPage : 1;

  const { sort, addSortOrderToUrlParam } =
    useAddSortOrderToUrlParam(sortFromState);
  const { limit, addLimitToUrlParam } = useAddLimitToUrlParam(limitFromState);
  const { addCurrentPageToUrlParam } = useAddCurrentPageToUrlParam(currentPage);

  const onPageChange = (pageNumber: number) => {
    dispatch(ProductsActions.setPage(pageNumber));
    navigate(getRouteProducts());
    fetchProducts({ page: pageNumber });
    addSortOrderToUrlParam(sort);
    addLimitToUrlParam(Number(limit));
    addCurrentPageToUrlParam(pageNumber);
  };

  const paginationRange = usePaginate({
    currentPage,
    lastPage,
  });

  if (isSuccess && products) {
    return (
      <Paginate
        onPageChange={onPageChange}
        paginationRange={paginationRange}
        currentPage={products.metaData.currentPage}
        lastPage={products.metaData.lastPage}
      />
    );
  }
});

ProductsPaginate.displayName = `ProductsPaginate`;
