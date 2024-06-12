import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './Product.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchRating } from '@/entities/Rating';
import { ProductSummaryCard } from '../ProductSummaryCard/ProductSummaryCard';
import { ProductImage } from '../ProductImage/ProductImage';
import { IProduct } from '../../model/types/IProduct';

interface ProductDetailsProps {
  className?: string;
  product: IProduct;
  isLoading: boolean;
  isSuccess: boolean;
}

export const Product = memo((props: ProductDetailsProps) => {
  const { className, product, isLoading, isSuccess } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRating({ productId: product.id }));
  }, [dispatch, product.id]);

  if (isLoading) {
    return (
      <div className={classNames(cls.Product, {}, [className])}>Loading...</div>
    );
  }

  if (isSuccess) {
    return (
      <div className={classNames(cls.Product, {}, [className])}>
        <div className={cls.imageWrapper}>
          <ProductImage image={product.image} className={cls.image} />
        </div>
        <ProductSummaryCard />
      </div>
    );
  }
});
