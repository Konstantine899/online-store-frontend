import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './Product.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useRating } from '@/entities/Rating';
import { ProductSummaryCard } from '../ProductSummaryCard/ProductSummaryCard';
import { useProductContext } from '../../lib/contexts/ProductContext';
import {
  getRouteImage,
  getRouteImageNotFound,
} from '@/shared/consts/router/publicRouter';
import { KitImage } from '@/shared/ui/KitImage/KitImage';

interface ProductDetailsProps {
  className?: string;
}

export const Product = memo((props: ProductDetailsProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [fetchRating] = useRating();
  const { product, isLoading, isSuccess } = useProductContext();

  useEffect(() => {
    if (product) fetchRating({ productId: product.id });
  }, [dispatch, fetchRating, product]);

  if (isLoading) {
    return (
      <div className={classNames(cls.Product, {}, [className])}>Loading...</div>
    );
  }

  if (isSuccess && product) {
    return (
      <div className={classNames(cls.Product, {}, [className])}>
        <div className={cls.imageWrapper}>
          <KitImage
            className={classNames(cls.image, {}, [className])}
            src={getRouteImage(product.image)}
            alt={product.image}
            spareImage={
              <img src={getRouteImageNotFound()} alt={'not_found_image'} />
            }
          />
        </div>
        <ProductSummaryCard />
      </div>
    );
  }
});

Product.displayName = `Product`;
