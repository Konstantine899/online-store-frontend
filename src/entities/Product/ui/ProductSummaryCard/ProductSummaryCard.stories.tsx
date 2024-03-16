import type { Meta, StoryObj } from '@storybook/react';
import { ProductSummaryCard } from './ProductSummaryCard';
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

const meta: Meta<typeof ProductSummaryCard> = {
  title: 'entities/ProductSummaryCard',
  component: ProductSummaryCard,
};

export default meta;
type Story = StoryObj<typeof ProductSummaryCard>;

export const Primary: Story = {
  args: {},
  render: () => <ProductSummaryCard productDetails={productDetails} />,
};
