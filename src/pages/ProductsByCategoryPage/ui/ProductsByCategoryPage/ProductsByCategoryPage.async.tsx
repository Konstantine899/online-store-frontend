import { lazy, Suspense } from 'react';
import { ProductsByCategoryPageProps } from './ProductsByCategoryPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { productsByCategoryReducers } from '../../model/slices';
import { ProductsByCategoryProvider } from '@/entities/Product';
import { PageLoader } from '@/widgets/PageLoader';

export const ProductsByCategoryLazy = lazy(
  () => import('./ProductsByCategoryPage'),
);

const reducers: ReducersList = {
  productsByCategoryPage: productsByCategoryReducers,
};

export const ProductsByCategoryAsync = (props: ProductsByCategoryPageProps) => (
  <Suspense fallback={<PageLoader />}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductsByCategoryProvider>
        <ProductsByCategoryLazy {...props} />
      </ProductsByCategoryProvider>
    </DynamicModuleLoader>
  </Suspense>
);
