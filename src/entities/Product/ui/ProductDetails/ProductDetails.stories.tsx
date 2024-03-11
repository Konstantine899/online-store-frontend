import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetails } from './ProductDetails';
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

const meta: Meta<typeof ProductDetails> = {
  title: 'entities/ProductDetails',
  component: ProductDetails,
};

export default meta;
type Story = StoryObj<typeof ProductDetails>;

export const Primary: Story = {
  args: {},
  render: () => <ProductDetails productDetails={productDetails} />,
};
