import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';
import {
  ProductsByCategoryActions,
  useProductsByCategory,
} from '@/entities/Product';

interface ProductsByCategoryPaginateProps {
  className?: string;
  currentPage: number;
  lastPage: number;
}

export const ProductsByCategoryPaginate = memo(
  (props: ProductsByCategoryPaginateProps) => {
    const { className, lastPage, currentPage } = props;
    const dispatch = useAppDispatch();
    const categoryId = useSelector(selectCategoryId);
    const [fetchProductsByCategory] = useProductsByCategory();

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryActions.setPage(pageNumber));
      fetchProductsByCategory({ categoryId, page: pageNumber });
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

ProductsByCategoryPaginate.displayName = `ProductsByCategoryPaginate`;
