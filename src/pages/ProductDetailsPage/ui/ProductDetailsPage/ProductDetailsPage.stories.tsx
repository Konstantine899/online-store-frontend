import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetailsPage } from './ProductDetailsPage';

const meta: Meta<typeof ProductDetailsPage> = {
  title: 'pages/ProductDetailsPage',
  tags: ['autodocs'],
  component: ProductDetailsPage,
};

export default meta;
type Story = StoryObj<typeof ProductDetailsPage>;

export const Primary: Story = {
  args: {},
  render: () => <ProductDetailsPage />,
};
