import { lazy, Suspense } from 'react';
import { ProductsByCategoryAndBrandPageProps } from './ProductsByCategoryAndBrandPage';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProductsByCategoryAndBrandProvider,
  ProductsByCategoryAndBrandReducer,
} from '@/entities/Product';
import { brandReducers } from '@/entities/Brand';
import { PageLoader } from '@/widgets/PageLoader';

const reducers: ReducersList = {
  productsByCategoryAndBrand: ProductsByCategoryAndBrandReducer,
  brand: brandReducers,
};

const ProductsByCategoryAndBrandPageLazy = lazy(
  () => import('./ProductsByCategoryAndBrandPage'),
);

export const ProductsByCategoryAndBrandPageAsync = (
  props: ProductsByCategoryAndBrandPageProps,
) => (
  <Suspense fallback={<PageLoader />}>
    <DynamicModuleLoader reducers={reducers}>
      <ProductsByCategoryAndBrandProvider>
        <ProductsByCategoryAndBrandPageLazy {...props} />
      </ProductsByCategoryAndBrandProvider>
    </DynamicModuleLoader>
  </Suspense>
);
