import type { Meta, StoryObj } from '@storybook/react';
import { ProductSpecification } from './ProductSpecification';
import { IProductDetails } from '../../model/types/IProductDetails';

const productDetails: IProductDetails = {
  id: 1,
  name: 'Xiaomi',
  price: 100,
  rating: 5,
  brand_id: 1,
  category_id: 1,
  image: '',
  properties: [],
  _inited: false,
};

const meta: Meta<typeof ProductSpecification> = {
  title: 'entities/ProductDetailsInfo',
  component: ProductSpecification,
};

export default meta;
type Story = StoryObj<typeof ProductSpecification>;

export const Primary: Story = {
  args: {},
  render: () => (
    <ProductSpecification productDetails={productDetails} title={'Основные'} />
  ),
};
