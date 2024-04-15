import { memo, Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductDetailsPage.module.scss';
import { Page } from '@/widgets/Page';
import { fetchProductDetails, ProductDetails } from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProductDetailsPageReducer } from '../../../../entities/Product/model/slices/ProductDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getProductDetailsSelector } from '../../../../entities/Product/model/selectors/getProductDetailsSelector';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { BrandReducer } from '@/entities/Brand';
import { CategoryReducer } from '@/entities/Category';
import { RatingReducer } from '@/entities/Rating';

const ProductDetailsPageAsyncReducer: ReducersList = {
  productDetailsPage: ProductDetailsPageReducer,
  brand: BrandReducer,
  category: CategoryReducer,
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
    dispatch(fetchProductDetails({ id: Number(id) }));
  }, [dispatch, id]);

  const productDetails = useSelector(getProductDetailsSelector);

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
