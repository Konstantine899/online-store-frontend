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

interface ProductsPaginateProps {
  className?: string;
}

export const ProductsPaginate = memo((props: ProductsPaginateProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [fetchProducts] = useProducts();
  const { products, isSuccess } = useProductsContext();

  const onPageChange = (pageNumber: number) => {
    dispatch(ProductsActions.setPage(pageNumber));
    navigate(getRouteProducts());
    fetchProducts({ page: pageNumber });
  };

  const paginationRange = usePaginate({
    currentPage: products?.metaData.currentPage,
    lastPage: products?.metaData.lastPage,
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
