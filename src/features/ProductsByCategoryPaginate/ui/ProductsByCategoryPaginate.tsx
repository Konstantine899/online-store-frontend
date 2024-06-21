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
  useProductsByCategoryContext,
} from '@/entities/Product';

interface ProductsByCategoryPaginateProps {
  className?: string;
}

export const ProductsByCategoryPaginate = memo(
  (props: ProductsByCategoryPaginateProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const categoryId = useSelector(selectCategoryId);
    const [fetchProductsByCategory] = useProductsByCategory();
    const { productsByCategory, isLoading, isSuccess } =
      useProductsByCategoryContext();

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryActions.setPage(pageNumber));
      fetchProductsByCategory({ categoryId, page: pageNumber });
    };

    const paginationRange = usePaginate({
      currentPage: productsByCategory?.metaData.currentPage,
      lastPage: productsByCategory?.metaData.lastPage,
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
            currentPage={productsByCategory.metaData.currentPage}
            lastPage={productsByCategory.metaData.lastPage}
          />
        </div>
      );
    }
  },
);

ProductsByCategoryPaginate.displayName = `ProductsByCategoryPaginate`;
