import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSpecification.module.scss';
import { IProductDetails } from '../../model/types/IProductDetails';

interface ProductDetailsInfoProps {
  className?: string;
  productDetails: IProductDetails;
  title: string;
}

export const ProductSpecification = memo((props: ProductDetailsInfoProps) => {
  const { className, productDetails, title } = props;

  return (
    <div className={classNames(cls.ProductSpecification, {}, [className])}>
      <div className={cls.productSpecificationsTitle}>{title}</div>
      <table className={cls.productSpecificationsTable}>
        <tbody>
          {productDetails?.properties.map((property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
