import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';
import { useNavigate } from 'react-router-dom';
import { getRouteProducts } from '@/shared/consts/router/publicRouter';
import { useProducts } from '../../api/productsApi';
import { useProductsContext } from '../../lib/contexts/ProductsContext';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useSelector } from 'react-redux';
import { useAddSortOrderToUrlParam } from '../../lib/hooks/useAddSortOrderToUrlParam';
import { useAddLimitToUrlParam } from '../../lib/hooks/useAddLimitToUrlParam';
import {
  selectProductsLimit,
  selectProductsSortOrder,
} from '../../model/selectors/selectProducts';
import { useAddCurrentPageToUrlParam } from '../../lib/hooks/useAddCurrentPageToUrlParam';

interface ProductsPaginateProps {
  className?: string;
}

export const ProductsPaginate = memo((props: ProductsPaginateProps) => {
  const { className } = props;
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
  const { page, addCurrentPageToUrlParam } =
    useAddCurrentPageToUrlParam(currentPage);

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
      <div className={classNames(cls.ProductsPaginate, {}, [className])}>
        <Paginate
          onPageChange={onPageChange}
          paginationRange={paginationRange}
          currentPage={products.metaData.currentPage}
          lastPage={products.metaData.lastPage}
        />
      </div>
    );
  }
});

ProductsPaginate.displayName = `ProductsPaginate`;
