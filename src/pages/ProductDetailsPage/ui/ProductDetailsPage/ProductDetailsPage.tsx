import { memo, Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductDetailsPage.module.scss';
import { Page } from '@/widgets/Page';
import { fetchProductDetailsPage, ProductDetails } from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProductDetailsPageReducer } from '../../model/slices/ProductDetailsPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getProductDetailsPageSelector } from '../../model/selectors/getProductDetailsPageSelector';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { BrandReducer } from '@/entities/Brand';
import { CategorySliceReducer } from '@/entities/Category';
import { RatingReducer } from '@/entities/Rating';

const ProductDetailsPageAsyncReducer: ReducersList = {
  productDetailsPage: ProductDetailsPageReducer,
  brand: BrandReducer,
  category: CategorySliceReducer,
  rating: RatingReducer,
};

interface ProductDetailsPageProps {
  className?: string;
}

export const ProductDetailsPage = memo((props: ProductDetailsPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchProductDetailsPage({ id: Number(id) }));
  }, [dispatch, id]);

  const productDetails = useSelector(getProductDetailsPageSelector);

  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={ProductDetailsPageAsyncReducer}>
        <Page className={classNames(cls.ProductDetailsPage, {}, [className])}>
          <ProductDetails productDetails={productDetails} />
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});
