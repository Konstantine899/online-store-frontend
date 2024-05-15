import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductPreview.module.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchBrand } from '@/entities/Brand';
import { fetchCategory } from '@/entities/Category';
import { fetchRating } from '@/entities/Rating';
import { ProductSummaryCard } from '../ProductSummaryCard/ProductSummaryCard';
import { ProductImage } from '../ProductImage/ProductImage';
import {
  getProductDetailsInitedSelector,
  getProductDetailsIsLoadingSelector,
  getProductDetailsSelector,
} from '../../model/selectors/getProductDetailsSelector';

interface ProductDetailsProps {
  className?: string;
}

export const ProductPreview = memo((props: ProductDetailsProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const productDetails = useSelector(getProductDetailsSelector);
  const isLoading = useSelector(getProductDetailsIsLoadingSelector);
  const _inited = useSelector(getProductDetailsInitedSelector);

  useEffect(() => {
    if (productDetails) {
      dispatch(fetchBrand({ id: productDetails?.brand_id }));
      dispatch(fetchCategory({ id: productDetails?.category_id }));
      dispatch(fetchRating({ productId: productDetails?.id }));
    }
  }, [_inited, dispatch, productDetails]);

  if (isLoading) {
    return (
      <div className={classNames(cls.ProductPreview, {}, [className])}>
        Loading...
      </div>
    );
  }

  if (_inited) {
    return (
      <div className={classNames(cls.ProductPreview, {}, [className])}>
        <div className={cls.imageWrapper}>
          <ProductImage image={productDetails!.image} className={cls.image} />
        </div>
        <ProductSummaryCard />
      </div>
    );
  }
});
