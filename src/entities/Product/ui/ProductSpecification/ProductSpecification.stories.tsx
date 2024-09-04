import type { Meta, StoryObj } from '@storybook/react';
import { ProductSpecification } from './ProductSpecification';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductSpecification.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { IProductProperty } from '../../model/types/IProduct';
import { mockProduct } from '@/shared/config/storybook/mocks/mockProduct';

const meta: Meta<typeof ProductSpecification> = {
  title: 'entities/ProductSpecification',
  component: ProductSpecification,
};

export default meta;
type Story = StoryObj<typeof ProductSpecification>;

export const Primary: Story = {
  args: {},
  render: () => (
    <div className={classNames(cls.ProductSpecification, {}, [])}>
      <Text
        text={`Характеристики`}
        size={TextSize.XL}
        theme={TextTheme.BLACK}
        className={cls.Title}
      />
      <table className={cls.Table}>
        <tbody>
          {mockProduct.properties.map((property: IProductProperty) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};
