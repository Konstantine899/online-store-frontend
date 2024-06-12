import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSpecification.module.scss';
import { useSelector } from 'react-redux';
import { selectProperties } from '../../model/selectors/selectProductDetails';
import { IProductProperty } from '../../model/types/IProduct';

interface ProductDetailsInfoProps {
  className?: string;
  title: string;
}

export const ProductSpecification = memo((props: ProductDetailsInfoProps) => {
  const { className, title } = props;
  const properties = useSelector(selectProperties);

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
