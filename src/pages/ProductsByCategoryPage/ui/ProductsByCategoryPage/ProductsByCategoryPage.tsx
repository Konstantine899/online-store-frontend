import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryPage.module.scss';
import { Page } from '@/widgets/Page';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import {
  fetchProductsByCategory,
  ProductsActions,
  selectProductsByCategory,
  selectProductsByCategoryCount,
  selectProductsByCategoryInited,
  selectProductsByCategoryIsLoading,
  selectProductsByCategoryLimit,
  ProductList,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { PageHeading } from '@/entities/PageHeading';

export interface ProductsByCategoryPageProps {
  className?: string;
}

const ProductsByCategoryPage = memo((props: ProductsByCategoryPageProps) => {
  const { className } = props;
  const categoryId = useSelector(selectCategoryId);
  const dispatch = useAppDispatch();
  const products = useSelector(selectProductsByCategory);
  const isLoading = useSelector(selectProductsByCategoryIsLoading);
  const _inited = useSelector(selectProductsByCategoryInited);
  const limit = useSelector(selectProductsByCategoryLimit);
  const count = useSelector(selectProductsByCategoryCount);

  useEffect(() => {
    dispatch(ProductsActions.setSearch(''));
    dispatch(fetchProductsByCategory({ categoryId: Number(categoryId) }));
  }, [categoryId, dispatch]);

  return (
    <Page className={classNames(cls.ProductsByCategoryPage, {}, [className])}>
      <PageHeading count={count} />
      <ProductList
        _inited={_inited}
        products={products}
        limit={limit}
        isLoading={isLoading}
      />
    </Page>
  );
});

export default ProductsByCategoryPage;
