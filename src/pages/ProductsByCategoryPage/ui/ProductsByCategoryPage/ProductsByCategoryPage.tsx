import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryPage.module.scss';
import { Page } from '@/widgets/Page';
import { useSelector } from 'react-redux';
import {
  ProductList,
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
  useProductsByCategory,
  ProductsByCategoryCount,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProductsByCategoryFilters } from '@/features/ProductsByCategoryFilters';
import { ProductsByCategoryPaginate } from '@/features/ProductsByCategoryPaginate';
import { useParams } from 'react-router';
import { ProductsByCategory } from '@/entities/Product/ui/ProductsByCategory/ProductsByCategory';

export interface ProductsByCategoryPageProps {
  className?: string;
}

const ProductsByCategoryPage = memo((props: ProductsByCategoryPageProps) => {
  const { className } = props;
  const { categoryId } = useParams();
  const dispatch = useAppDispatch();
  const limit = useSelector(selectProductsByCategoryLimit);
  const sort = useSelector(selectProductsByCategorySort);
  const page = useSelector(selectProductsByCategoryCurrentPage);
  const [fetchProductsByCategory, { data, isSuccess, isLoading }] =
    useProductsByCategory();

  useEffect(() => {
    fetchProductsByCategory({
      categoryId: Number(categoryId),
      limit,
      sort,
      page,
    });
  }, [categoryId, dispatch, fetchProductsByCategory, limit, page, sort]);

  if (data && isSuccess) {
    return (
      <Page className={classNames(cls.ProductsByCategoryPage, {}, [className])}>
        <ProductsByCategoryCount count={data.count} />
        <ProductsByCategoryFilters />
        <ProductsByCategory
          isSuccess={isSuccess}
          products={data.rows}
          limit={limit}
          isLoading={isLoading}
        />
        <ProductsByCategoryPaginate
          lastPage={data.metaData.lastPage}
          currentPage={data.metaData.currentPage}
        />
      </Page>
    );
  }
});

ProductsByCategoryPage.displayName = `ProductsByCategoryPage`;

export default ProductsByCategoryPage;
