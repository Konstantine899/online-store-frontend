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
import { PageLoader } from '@/widgets/PageLoader';

const reducers: ReducersList = {
  productPage: productDetailsPageReducers,
  brand: brandReducers,
  category: categoryReducers,
};

const ProductPageLazy = lazy(() => import('./ProductPage'));

export const ProductPageAsync = (props: ProductDetailsPageProps) => (
  <Suspense fallback={<PageLoader />}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductProvider>
        <ProductPageLazy {...props} />
      </ProductProvider>
    </DynamicModuleLoader>
  </Suspense>
);
