import { lazy, Suspense } from 'react';
import { ProductsByCategoryPageProps } from './ProductsByCategoryPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productsByCategoryReducers } from '../../model/slices';

export const ProductsByCategoryLazy = lazy(
  () => import('./ProductsByCategoryPage'),
);

const reducers: ReducersList = {
  productsByCategoryPage: productsByCategoryReducers,
};

export const ProductsByCategoryAsync = (props: ProductsByCategoryPageProps) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductsByCategoryLazy {...props} />
    </DynamicModuleLoader>
  </Suspense>
);
