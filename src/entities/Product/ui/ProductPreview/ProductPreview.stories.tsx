import type { Meta, StoryObj } from '@storybook/react';
import { ProductPreview } from './ProductPreview';

const meta: Meta<typeof ProductPreview> = {
  title: 'entities/ProductDetails',
  tags: ['autodocs'],
  component: ProductPreview,
};

export default meta;
type Story = StoryObj<typeof ProductPreview>;

export const Primary: Story = {
  args: {},
  render: () => <ProductPreview />,
};
