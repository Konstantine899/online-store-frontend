import { lazy, Suspense } from 'react';
import { ProductsByCategoryAndBrandPageProps } from './ProductsByCategoryAndBrandPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { productsByCategoryAndBrandPageReducers } from '../models/slices';
import { brandReducers } from '@/entities/Brand';
import { ProductsByCategoryAndBrandProvider } from '@/entities/Product';

const reducers: ReducersList = {
  productsByCategoryAndBrandPage: productsByCategoryAndBrandPageReducers,
  brand: brandReducers,
};

const ProductsByCategoryAndBrandPageLazy = lazy(
  () => import('./ProductsByCategoryAndBrandPage'),
);

export const ProductsByCategoryAndBrandPageAsync = (
  props: ProductsByCategoryAndBrandPageProps,
) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductsByCategoryAndBrandProvider>
        <ProductsByCategoryAndBrandPageLazy {...props} />
      </ProductsByCategoryAndBrandProvider>
    </DynamicModuleLoader>
  </Suspense>
);
