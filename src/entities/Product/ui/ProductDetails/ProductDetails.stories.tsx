import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetails } from './ProductDetails';

const meta: Meta<typeof ProductDetails> = {
  title: 'entities/ProductDetails',
  component: ProductDetails,
};

export default meta;
type Story = StoryObj<typeof ProductDetails>;

export const Primary: Story = {
  args: {},
  render: () => <ProductDetails />,
};
