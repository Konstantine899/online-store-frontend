import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryAndBrandPage.module.scss';
import {
  ProductList,
  ProductsActions,
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandSort,
  useProductsByCategoryAndBrand,
  ProductsByCategoryAndBrandCount,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductsByCategoryAndBrandFilters } from '@/features/ProductsByCategoryAndBrandFilters';
import { Page } from '@/widgets/Page';
import { ProductsByCategoryAndBrandPaginate } from '@/features/ProductsByCategoryAndBrandPaginate';

export interface ProductsByCategoryAndBrandPageProps {
  className?: string;
}

const ProductsByCategoryAndBrandPage = memo(
  (props: ProductsByCategoryAndBrandPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { brandId, categoryId } = useParams();
    const limit = useSelector(selectProductsByCategoryAndBrandLimit);
    const sort = useSelector(selectProductsByCategoryAndBrandSort);
    const page = useSelector(selectProductsByCategoryAndBrandCurrentPage);
    const [fetchProductsByCategoryAndBrand, { data, isSuccess, isLoading }] =
      useProductsByCategoryAndBrand();

    useEffect(() => {
      dispatch(ProductsActions.setSearch(''));
      fetchProductsByCategoryAndBrand({
        brandId: Number(brandId),
        categoryId: Number(categoryId),
        sort,
        page,
        limit,
      });
    }, [
      categoryId,
      brandId,
      dispatch,
      fetchProductsByCategoryAndBrand,
      sort,
      page,
      limit,
    ]);

    if (data && isSuccess) {
      return (
        <Page
          className={classNames(cls.ProductsByCategoryAndBrandPage, {}, [
            className,
          ])}
        >
          <ProductsByCategoryAndBrandCount count={data.count} />
          <ProductsByCategoryAndBrandFilters />
          <ProductList
            _inited={isSuccess}
            products={data.rows}
            limit={limit}
            isLoading={isLoading}
          />
          <ProductsByCategoryAndBrandPaginate
            currentPage={data.metaData.currentPage}
            lastPage={data.metaData.lastPage}
          />
        </Page>
      );
    }
  },
);

ProductsByCategoryAndBrandPage.displayName = `ProductsByCategoryAndBrandPage`;

export default ProductsByCategoryAndBrandPage;
