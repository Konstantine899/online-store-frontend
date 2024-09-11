import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandPage.module.scss';
import { ProductsByCategoryAndBrand } from '@/entities/Product';
import { Page } from '@/widgets/Page';
import { ProductsByCategoryAndBrandCount } from '../ProductsByCategoryAndBrandCount/ProductsByCategoryAndBrandCount';
import { BrandTabs } from '@/entities/Brand';
import { ProductsByCategoryAndBrandSortOrder } from '../ProductsByCategoryAndBrandSortOrder/ProductsByCategoryAndBrandSortOrder';
import { ProductsByCategoryAndBrandLimit } from '../ProductsByCategoryAndBrandLimit/ProductsByCategoryAndBrandLimit';
import { ProductsByCategoryAndBrandPaginate } from '../ProductsByCategoryAndBrandPaginate/ProductsByCategoryAndBrandPaginate';

export interface ProductsByCategoryAndBrandPageProps {
  className?: string;
}

const ProductsByCategoryAndBrandPage = memo(
  (props: ProductsByCategoryAndBrandPageProps) => {
    const { className } = props;

    return (
      <Page className={classNames('', {}, [className])}>
        <ProductsByCategoryAndBrandCount />
        <div className={cls.ProductsByCategoryAndBrandFilters}>
          <ProductsByCategoryAndBrandSortOrder />
          <ProductsByCategoryAndBrandLimit />
          <BrandTabs />
        </div>
        <ProductsByCategoryAndBrand />
        <ProductsByCategoryAndBrandPaginate />
      </Page>
    );
  },
);

ProductsByCategoryAndBrandPage.displayName = `ProductsByCategoryAndBrandPage`;

export default ProductsByCategoryAndBrandPage;
