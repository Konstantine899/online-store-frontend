import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import {
  fetchProductsByCategory,
  ProductsActions,
  ProductsByCategoryActions,
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryLastPage,
} from '@/entities/Product';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

interface ProductsByCategoryPaginateProps {
  className?: string;
}

export const ProductsByCategoryPaginate = memo(
  (props: ProductsByCategoryPaginateProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const categoryId = useSelector(selectCategoryId);
    const currentPage = useSelector(selectProductsByCategoryCurrentPage);
    const lastPage = useSelector(selectProductsByCategoryLastPage);

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryActions.setPage(pageNumber));
      dispatch(fetchProductsByCategory({ categoryId }));
    };

    const paginationRange = usePaginate({
      currentPage,
      lastPage,
    });

    return (
      <div
        className={classNames(cls.ProductsByCategoryPaginate, {}, [className])}
      >
        <Paginate
          onPageChange={onPageChange}
          paginationRange={paginationRange}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      </div>
    );
  },
);
