import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandPaginate.module.scss';
import { Paginate } from '@/entities/Paginate';
import {
  ProductsByCategoryAndBrandActions,
  useProductsByCategoryAndBrand,
  useProductsByCategoryAndBrandContext,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';

interface ProductsByCategoryAndBrandPaginateProps {
  className?: string;
}

export const ProductsByCategoryAndBrandPaginate = memo(
  (props: ProductsByCategoryAndBrandPaginateProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { categoryId, brandId } = useParams();
    const [fetchProductsByCategoryAndBrand] = useProductsByCategoryAndBrand();
    const { productsByCategoryAndBrand, isSuccess } =
      useProductsByCategoryAndBrandContext();

    const onPageChange = (pageNumber: number) => {
      dispatch(ProductsByCategoryAndBrandActions.setPage(pageNumber));
      fetchProductsByCategoryAndBrand({
        brandId: Number(brandId),
        categoryId: Number(categoryId),
        page: pageNumber,
      });
    };

    const paginationRange = usePaginate({
      currentPage: productsByCategoryAndBrand?.metaData.currentPage,
      lastPage: productsByCategoryAndBrand?.metaData.lastPage,
    });

    if (isSuccess && productsByCategoryAndBrand) {
      return (
        <div
          className={classNames(cls.ProductsByCategoryAndBrandPaginate, {}, [
            className,
          ])}
        >
          <Paginate
            onPageChange={onPageChange}
            paginationRange={paginationRange}
            currentPage={productsByCategoryAndBrand.metaData.currentPage}
            lastPage={productsByCategoryAndBrand.metaData.lastPage}
          />
        </div>
      );
    }
  },
);

ProductsByCategoryAndBrandPaginate.displayName = `ProductsByCategoryAndBrandPaginate`;
