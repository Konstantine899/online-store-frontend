import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSpecification.module.scss';
import { IProductDetails } from '../../model/types/IProductDetails';

interface ProductDetailsInfoProps {
  className?: string;
  productDetails?: IProductDetails;
}

export const ProductSpecification = memo((props: ProductDetailsInfoProps) => {
  const { className, productDetails } = props;

  return (
    <div className={classNames(cls.ProductSpecification, {}, [className])}>
      <table>
        <thead>
          <tr>
            <th>Свойства</th>
            <th>Характеристики</th>
          </tr>
        </thead>
        <tbody>
          {productDetails?.properties.map((property) => (
            <tr key={property.id}>
              <th>{property.name}</th>
              <th>{property.value}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
