import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { IProductDetails } from '../../model/types/IProductDetails';
import { Product } from '../../model/types/ProductsSchema';
import { KitImage } from '@/shared/ui/KitImage/KitImage';

interface ProductImageProps {
  classNameProductListItem?: string;
  classNameProductDetails?: string;
  product?: Product;
  productDetails?: IProductDetails;
}

export const ProductImage = memo((props: ProductImageProps) => {
  const {
    classNameProductListItem,
    classNameProductDetails,
    product,
    productDetails,
  } = props;

  if (product) {
    return (
      <KitImage
        className={classNames('', {}, [classNameProductListItem])}
        src={`${__API_URL__}/static/${product.image}`}
        alt={product.name}
        spareImage={
          <img
            src={`${__API_URL__}/static/not_found_image.jpeg`}
            alt={'not_found_image'}
          />
        }
      />
    );
  }

  if (productDetails) {
    return (
      <KitImage
        className={classNames('', {}, [classNameProductDetails])}
        src={`${__API_URL__}/static/${productDetails?.image}`}
        spareImage={
          <img
            src={`${__API_URL__}/static/not_found_image.jpeg`}
            alt={'not_found_image'}
          />
        }
      />
    );
  }
});
