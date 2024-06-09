import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryPage.module.scss';
import { Page } from '@/widgets/Page';
import { useSelector } from 'react-redux';
import {
  fetchProductsByCategory,
  ProductList,
  ProductsActions,
  selectProductsByCategory,
  selectProductsByCategoryCount,
  selectProductsByCategoryInited,
  selectProductsByCategoryIsLoading,
  selectProductsByCategoryLimit,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageHeading } from '@/entities/PageHeading';
import { ProductsByCategoryFilters } from '@/features/ProductsByCategoryFilters';
import { ProductsByCategoryPaginate } from '@/features/ProductsByCategoryPaginate';
import { useParams } from 'react-router';
import { CategoryActions, selectCategoryId } from '@/entities/Category';

export interface ProductsByCategoryPageProps {
  className?: string;
}

const ProductsByCategoryPage = memo((props: ProductsByCategoryPageProps) => {
  const { className } = props;
  const { categoryId } = useParams();
  const dispatch = useAppDispatch();
  const products = useSelector(selectProductsByCategory);
  const isLoading = useSelector(selectProductsByCategoryIsLoading);
  const _inited = useSelector(selectProductsByCategoryInited);
  const limit = useSelector(selectProductsByCategoryLimit);
  const count = useSelector(selectProductsByCategoryCount);

  useEffect(() => {
    dispatch(ProductsActions.setSearch(''));
    dispatch(CategoryActions.setCategoryId(Number(categoryId)));
    dispatch(fetchProductsByCategory({ categoryId: Number(categoryId) }));
  }, [categoryId, dispatch]);

  return (
    <Page className={classNames(cls.ProductsByCategoryPage, {}, [className])}>
      <PageHeading count={count} />
      <ProductsByCategoryFilters />
      <ProductList
        _inited={_inited}
        products={products}
        limit={limit}
        isLoading={isLoading}
      />
      <ProductsByCategoryPaginate />
    </Page>
  );
});

export default ProductsByCategoryPage;
