import { lazy, Suspense } from 'react';
import { ProductDetailsPageProps } from './ProductPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { productDetailsPageReducers } from '../model/slices/index';
import { brandReducers } from '@/entities/Brand';
import { categoryReducers } from '@/entities/Category';
import { ProductProvider } from '@/entities/Product';

const reducers: ReducersList = {
  productPage: productDetailsPageReducers,
  brand: brandReducers,
  category: categoryReducers,
};

const ProductPageLazy = lazy(() => import('./ProductPage'));

export const ProductPageAsync = (props: ProductDetailsPageProps) => (
  <Suspense fallback={''}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductProvider>
        <ProductPageLazy {...props} />
      </ProductProvider>
    </DynamicModuleLoader>
  </Suspense>
);
