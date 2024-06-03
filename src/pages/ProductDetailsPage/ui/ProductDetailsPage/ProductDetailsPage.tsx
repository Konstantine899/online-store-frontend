import { memo, Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductDetailsPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  entityProductReducers,
  fetchProductDetails,
  ProductHeading,
  ProductPreview,
  ProductSpecification,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router';
import { brandReducers } from '@/entities/Brand';
import { categoryReducers } from '@/entities/Category';
import { RatingReducer } from '@/entities/Rating';

const ProductDetailsPageAsyncReducer: ReducersList = {
  entityProduct: entityProductReducers,
  brand: brandReducers,
  category: categoryReducers,
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
