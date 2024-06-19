import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import { ProductsActions, useProducts } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

interface ProductsPaginateProps {
  className?: string;
  currentPage: number;
  lastPage: number;
}

export const ProductsPaginate = memo((props: ProductsPaginateProps) => {
  const { className, lastPage, currentPage } = props;
  const dispatch = useAppDispatch();
  const [fetchProducts] = useProducts();

  const onPageChange = (pageNumber: number) => {
    dispatch(ProductsActions.setPage(pageNumber));
    fetchProducts({ page: pageNumber });
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

ProductsPaginate.displayName = `ProductsPaginate`;
