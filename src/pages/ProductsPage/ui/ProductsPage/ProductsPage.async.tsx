import { lazy, Suspense } from 'react';
import { ProductsPageProps } from './ProductsPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { brandReducers } from '@/entities/Brand';
import { ProductsProvider } from '@/entities/Product';
import { PageLoader } from '@/widgets/PageLoader';

const reducers: ReducersList = {
  brand: brandReducers,
};

export const ProductsPageLazy = lazy(() => import('./ProductsPage'));

export const ProductsPageAsync = (props: ProductsPageProps) => (
  <Suspense fallback={<PageLoader />}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductsProvider>
        <ProductsPageLazy {...props} />
      </ProductsProvider>
    </DynamicModuleLoader>
  </Suspense>
);
