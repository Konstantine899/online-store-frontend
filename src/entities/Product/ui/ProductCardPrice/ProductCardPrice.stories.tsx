import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardPrice } from './ProductCardPrice';

const meta: Meta<typeof ProductCardPrice> = {
  title: 'entities/ProductCardPrice',
  component: ProductCardPrice,
};

export default meta;
type Story = StoryObj<typeof ProductCardPrice>;

export const Primary: Story = {
  args: {},
  render: () => <ProductCardPrice />,
};
