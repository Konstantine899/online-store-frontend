import { memo, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  Product,
  ProductHeading,
  ProductSpecification,
  useProduct,
} from '@/entities/Product';
import { useParams } from 'react-router';

export interface ProductDetailsPageProps {
  className?: string;
}

const ProductPage = memo((props: ProductDetailsPageProps) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();
  const [fetchProduct, { data, isSuccess, isLoading }] = useProduct();

  useEffect(() => {
    fetchProduct({ productId: Number(id) });
  }, [fetchProduct, id]);

  if (data && isSuccess) {
    return (
      <Page className={classNames(cls.ProductDetailsPage, {}, [className])}>
        <ProductHeading name={data.name} />
        <Product product={data} isLoading={isLoading} isSuccess={isSuccess} />
        <ProductSpecification
          title={`Характеристики`}
          properties={data.properties}
        />
      </Page>
    );
  }
});

ProductPage.displayName = `ProductPage`;

export default ProductPage;
