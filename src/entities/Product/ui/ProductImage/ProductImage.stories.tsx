import type { Meta, StoryObj } from '@storybook/react';
import { ProductImage } from './ProductImage';

const meta: Meta<typeof ProductImage> = {
  title: 'entities/ProductImage',
  component: ProductImage,
};

export default meta;
type Story = StoryObj<typeof ProductImage>;

export const Primary: Story = {
  args: {},
  render: () => <ProductImage />,
};
