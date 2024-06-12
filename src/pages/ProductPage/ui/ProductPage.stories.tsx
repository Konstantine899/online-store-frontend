import type { Meta, StoryObj } from '@storybook/react';
import { ProductPage } from './ProductPage';

const meta: Meta<typeof ProductPage> = {
  title: 'pages/ProductDetailsPage',
  tags: ['autodocs'],
  component: ProductPage,
};

export default meta;
type Story = StoryObj<typeof ProductPage>;

export const Primary: Story = {
  args: {},
  render: () => <ProductPage />,
};
