import { lazy, Suspense } from 'react';
import { ProductsByCategoryAndBrandPageProps } from './ProductsByCategoryAndBrandPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productsByCategoryAndBrandPageReducers } from '../../models/slices';

const reducers: ReducersList = {
  productsByCategoryAndBrandPage: productsByCategoryAndBrandPageReducers,
};

const ProductsByCategoryAndBrandPageLazy = lazy(
  () => import('./ProductsByCategoryAndBrandPage'),
);

export const ProductsByCategoryAndBrandPageAsync = (
  props: ProductsByCategoryAndBrandPageProps,
) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductsByCategoryAndBrandPageLazy {...props} />
    </DynamicModuleLoader>
  </Suspense>
);
