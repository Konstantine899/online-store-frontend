import { lazy, Suspense } from 'react';
import { ProductsPageProps } from './ProductsPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { productsPageReducers } from '../../model/slices';
import { brandReducers } from '@/entities/Brand';

const reducers: ReducersList = {
  productsPage: productsPageReducers,
  brand: brandReducers,
};

export const ProductsPageLazy = lazy(() => import('./ProductsPage'));

export const ProductsPageAsync = (props: ProductsPageProps) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductsPageLazy {...props} />
    </DynamicModuleLoader>
  </Suspense>
);
