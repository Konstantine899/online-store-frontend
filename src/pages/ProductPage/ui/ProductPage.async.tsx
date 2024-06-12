import { lazy, Suspense } from 'react';
import { ProductDetailsPageProps } from './ProductPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productDetailsPageReducers } from '../model/slices/index';
import { brandReducers } from '@/entities/Brand';
import { categoryReducers } from '@/entities/Category';
import { RatingReducer } from '@/entities/Rating';

const reducers: ReducersList = {
  productPage: productDetailsPageReducers,
  brand: brandReducers,
  category: categoryReducers,
  rating: RatingReducer,
};

const ProductPageLazy = lazy(() => import('./ProductPage'));

export const ProductPageAsync = (props: ProductDetailsPageProps) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductPageLazy {...props} />
    </DynamicModuleLoader>
  </Suspense>
);
