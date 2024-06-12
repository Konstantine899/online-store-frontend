import { lazy, Suspense } from 'react';
import { ProductDetailsPageProps } from './ProductPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productDetailsPageReducers } from '../model/slices/index';
import { brandReducers } from '@/entities/Brand';
import { categoryReducers } from '@/entities/Category';

const reducers: ReducersList = {
  productPage: productDetailsPageReducers,
  brand: brandReducers,
  category: categoryReducers,
};

const ProductPageLazy = lazy(() => import('./ProductPage'));

export const ProductPageAsync = (props: ProductDetailsPageProps) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductPageLazy {...props} />
    </DynamicModuleLoader>
  </Suspense>
);
