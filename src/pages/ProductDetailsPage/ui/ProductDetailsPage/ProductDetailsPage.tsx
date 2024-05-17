import { memo, Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductDetailsPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  fetchProductDetails,
  ProductHeading,
  ProductPreview,
  ProductSpecification,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProductDetailsPageReducer } from '../../../../entities/Product/model/slices/ProductDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router';
import { EntityBrandReducers } from '@/entities/Brand';
import { CategoryReducer } from '@/entities/Category';
import { RatingReducer } from '@/entities/Rating';

const ProductDetailsPageAsyncReducer: ReducersList = {
  productDetails: ProductDetailsPageReducer,
  entityBrand: EntityBrandReducers,
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

  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={ProductDetailsPageAsyncReducer}>
        <Page className={classNames(cls.ProductDetailsPage, {}, [className])}>
          <ProductHeading />
          <ProductPreview />
          <ProductSpecification title={`Характеристики`} />
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});
