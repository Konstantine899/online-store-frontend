import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSpecification.module.scss';
import { IProductProperty } from '../../model/types/IProduct';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useProductContext } from '../../lib/contexts/ProductContext';

interface ProductDetailsInfoProps {
  className?: string;
}

export const ProductSpecification = memo((props: ProductDetailsInfoProps) => {
  const { className } = props;
  const { product, isSuccess } = useProductContext();

  if (isSuccess && product) {
    return (
      <div className={classNames(cls.ProductSpecification, {}, [className])}>
        <Text
          text={`Характеристики`}
          size={TextSize.XL}
          theme={TextTheme.BLACK}
          className={cls.Title}
        />
        <table className={cls.Table}>
          <tbody>
            {product.properties.map((property: IProductProperty) => (
              <tr key={property.id}>
                <td>{property.name}</td>
                <td>{property.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
});

ProductSpecification.displayName = `ProductSpecification`;
