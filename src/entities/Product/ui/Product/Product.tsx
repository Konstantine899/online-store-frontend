import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './Product.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProductSummaryCard } from '../ProductSummaryCard/ProductSummaryCard';
import { ProductImage } from '../ProductImage/ProductImage';
import { IProduct } from '../../model/types/IProduct';
import { useRating } from '@/entities/Rating';

interface ProductDetailsProps {
  className?: string;
  product: IProduct;
  isLoading: boolean;
  isSuccess: boolean;
}

export const Product = memo((props: ProductDetailsProps) => {
  const { className, product, isLoading, isSuccess } = props;

  const dispatch = useAppDispatch();
  const [fetchRating] = useRating();

  useEffect(() => {
    fetchRating({ productId: product.id });
  }, [dispatch, fetchRating, product.id]);

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

Product.displayName = `Product`;
