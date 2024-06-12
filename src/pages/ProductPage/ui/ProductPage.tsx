import { memo, Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  Product,
  ProductHeading,
  ProductSpecification,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useParams } from 'react-router';
import { brandReducers } from '@/entities/Brand';
import { categoryReducers } from '@/entities/Category';
import { RatingReducer } from '@/entities/Rating';
import { productDetailsPageReducers } from '../model/slices';
import { useProduct } from '@/entities/Product';

const ProductDetailsPageAsyncReducer: ReducersList = {
  productPage: productDetailsPageReducers,
  brand: brandReducers,
  category: categoryReducers,
  rating: RatingReducer,
};

interface ProductDetailsPageProps {
  className?: string;
}

export const ProductPage = memo((props: ProductDetailsPageProps) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();
  const [fetchProduct, { data, isSuccess, isLoading }] = useProduct();

  useEffect(() => {
    fetchProduct({ productId: Number(id) });
  }, [fetchProduct, id]);

  if (data && isSuccess) {
    return (
      <Suspense fallback={''}>
        <DynamicModuleLoader reducers={ProductDetailsPageAsyncReducer}>
          <Page className={classNames(cls.ProductDetailsPage, {}, [className])}>
            <ProductHeading name={data.name} />
            <Product
              product={data}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />
            <ProductSpecification
              title={`Характеристики`}
              properties={data.properties}
            />
          </Page>
        </DynamicModuleLoader>
      </Suspense>
    );
  }
});
