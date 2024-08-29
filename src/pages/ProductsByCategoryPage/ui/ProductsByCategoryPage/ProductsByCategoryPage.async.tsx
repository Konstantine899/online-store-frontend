import { lazy, Suspense } from 'react';
import { ProductsByCategoryPageProps } from './ProductsByCategoryPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProductsByCategoryProvider,
  ProductsByCategoryReducer,
} from '@/entities/Product';
import { PageLoader } from '@/widgets/PageLoader';

export const ProductsByCategoryLazy = lazy(
  () => import('./ProductsByCategoryPage'),
);

const reducers: ReducersList = {
  productsByCategory: ProductsByCategoryReducer,
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
