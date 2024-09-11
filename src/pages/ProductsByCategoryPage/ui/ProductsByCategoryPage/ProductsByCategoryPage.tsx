import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductsByCategory } from '@/entities/Product';
import { ProductsByCategoryCount } from '../ProductsByCategoryCount/ProductsByCategoryCount';
import { BrandTabs } from '@/entities/Brand';
import { ProductsByCategoryLimit } from '../ProductsByCategoryLimit/ProductsByCategoryLimit';
import { ProductsByCategorySortOrder } from '../ProductsByCategorySortOrder/ProductsByCategorySortOrder';
import { ProductsByCategoryPaginate } from '../ProductsByCategoryPaginate/ProductsByCategoryPaginate';

export interface ProductsByCategoryPageProps {
  className?: string;
}

const ProductsByCategoryPage = memo((props: ProductsByCategoryPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls.ProductsByCategoryPage, {}, [className])}>
      <ProductsByCategoryCount />
      <div className={cls.ProductsByCategoryFilters}>
        <ProductsByCategorySortOrder />
        <ProductsByCategoryLimit />
        <BrandTabs />
      </div>
      <ProductsByCategory />
      <ProductsByCategoryPaginate />
    </Page>
  );
});

ProductsByCategoryPage.displayName = `ProductsByCategoryPage`;

export default ProductsByCategoryPage;
