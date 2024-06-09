import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import {
  fetchProducts,
  ProductsActions,
  selectCurrentPage,
  selectLastPage,
  selectNextPage,
  selectPreviosPage,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';
import { useSelector } from 'react-redux';

interface ProductsPaginateProps {
  className?: string;
}

export const ProductsPaginate = memo((props: ProductsPaginateProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const currentPage = useSelector(selectCurrentPage); // текущая страница
  const lastPage = useSelector(selectLastPage); // последняя страница

  const onPageChange = (pageNumber: number) => {
    dispatch(ProductsActions.setPage(pageNumber));
    dispatch(fetchProducts());
  };

  const paginationRange = usePaginate({
    currentPage,
    lastPage,
  });

  return (
    <div className={classNames(cls.ProductsPaginate, {}, [className])}>
      <Paginate
        onPageChange={onPageChange}
        paginationRange={paginationRange}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </div>
  );
});
