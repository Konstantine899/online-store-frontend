import type { Meta, StoryObj } from '@storybook/react';
import { ProductsPopular } from './ProductsPopular';

const meta: Meta<typeof ProductsPopular> = {
  title: 'entities/ProductsPopular',
  component: ProductsPopular,
};

export default meta;
type Story = StoryObj<typeof ProductsPopular>;

export const Primary: Story = {
  args: {},
  render: () => <ProductsPopular />,
};
