import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryAndBrandPage.module.scss';
import {
  fetchProductsByCategoryAndBrand,
  ProductList,
  ProductsActions,
  selectProductsByCategoryAndBrand,
  selectProductsByCategoryAndBrandCount,
  selectProductsByCategoryAndBrandInited,
  selectProductsByCategoryAndBrandIsLoading,
  selectProductsByCategoryAndBrandLimit,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductsByCategoryAndBrandFilters } from '@/features/ProductsByCategoryAndBrandFilters';
import { Page } from '@/widgets/Page';
import { PageHeading } from '@/entities/PageHeading';
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
    const isLoading = useSelector(selectProductsByCategoryAndBrandIsLoading);
    const _inited = useSelector(selectProductsByCategoryAndBrandInited);
    const products = useSelector(selectProductsByCategoryAndBrand);
    const count = useSelector(selectProductsByCategoryAndBrandCount);

    useEffect(() => {
      dispatch(ProductsActions.setSearch(''));
      dispatch(
        fetchProductsByCategoryAndBrand({
          brandId: Number(brandId),
          categoryId: Number(categoryId),
        }),
      );
    }, [categoryId, brandId, dispatch]);

    return (
      <Page
        className={classNames(cls.ProductsByCategoryAndBrandPage, {}, [
          className,
        ])}
      >
        <PageHeading count={count} />
        <ProductsByCategoryAndBrandFilters />
        <ProductList
          _inited={_inited}
          products={products}
          limit={limit}
          isLoading={isLoading}
        />
        <ProductsByCategoryAndBrandPaginate />
      </Page>
    );
  },
);

export default ProductsByCategoryAndBrandPage;
