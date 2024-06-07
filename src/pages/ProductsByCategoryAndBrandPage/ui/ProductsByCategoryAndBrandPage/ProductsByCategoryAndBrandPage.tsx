import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryAndBrandPage.module.scss';
import {
  fetchProductsByCategoryAndBrand,
  ProductList,
  ProductsActions,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  selectProductsByCategoryAndBrand,
  selectProductsByCategoryAndBrandInited,
  selectProductsByCategoryAndBrandIsLoading,
  selectProductsByCategoryAndBrandLimit,
} from '@/entities/Product';
import { useParams } from 'react-router-dom';

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

    useEffect(() => {
      dispatch(ProductsActions.setSearch(''));
      dispatch(
        fetchProductsByCategoryAndBrand({
          brandId: Number(brandId),
          categoryId: Number(brandId),
        }),
      );
    }, [categoryId, brandId, dispatch]);

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandPage, {}, [
          className,
        ])}
      >
        <ProductList
          _inited={_inited}
          products={products}
          limit={limit}
          isLoading={isLoading}
        />
      </div>
    );
  },
);

export default ProductsByCategoryAndBrandPage;
