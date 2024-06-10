import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import {
  fetchProductsByCategoryAndBrand,
  ProductsByCategoryAndBrandActions,
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandLastPage,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';
import { useSelector } from 'react-redux';

interface ProductsByCategoryAndBrandPaginateProps {
  className?: string;
}

export const ProductsByCategoryAndBrandPaginate = memo(
  (props: ProductsByCategoryAndBrandPaginateProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { categoryId, brandId } = useParams();
    const currentPage = useSelector(
      selectProductsByCategoryAndBrandCurrentPage,
    );
    const lastPage = useSelector(selectProductsByCategoryAndBrandLastPage);

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryAndBrandActions.setPage(pageNumber));
      dispatch(
        fetchProductsByCategoryAndBrand({
          brandId: Number(brandId),
          categoryId: Number(categoryId),
        }),
      );
    };

    const paginationRange = usePaginate({
      currentPage,
      lastPage,
    });

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandPaginate, {}, [
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
  },
);
