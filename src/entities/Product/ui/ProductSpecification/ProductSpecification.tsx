import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSpecification.module.scss';
import { IProductProperty } from '../../model/types/IProduct';

interface ProductDetailsInfoProps {
  className?: string;
  title: string;
  properties: IProductProperty[];
}

export const ProductSpecification = memo((props: ProductDetailsInfoProps) => {
  const { className, title, properties } = props;

  return (
    <div className={classNames(cls.ProductSpecification, {}, [className])}>
      <div className={cls.productSpecificationsTitle}>{title}</div>
      <table className={cls.productSpecificationsTable}>
        <tbody>
          {properties.map((property: IProductProperty) => (
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

ProductSpecification.displayName = `ProductSpecification`;
