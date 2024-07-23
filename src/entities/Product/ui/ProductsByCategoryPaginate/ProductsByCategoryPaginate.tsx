import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

import { useNavigate } from 'react-router-dom';
import { getRouteProductsByCategory } from '@/shared/consts/router/publicRouter';
import { useProductsByCategory } from '../../api/productsApi';
import { useProductsByCategoryContext } from '../../lib/contexts/ProductsByCategoryContext';
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';

interface ProductsByCategoryPaginateProps {
  className?: string;
}

export const ProductsByCategoryPaginate = memo(
  (props: ProductsByCategoryPaginateProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const categoryId = useSelector(selectCategoryId);
    const navigate = useNavigate();
    const [fetchProductsByCategory] = useProductsByCategory();
    const { productsByCategory, isSuccess } = useProductsByCategoryContext();

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryActions.setPage(pageNumber));
      navigate(getRouteProductsByCategory(`${categoryId}`));
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
