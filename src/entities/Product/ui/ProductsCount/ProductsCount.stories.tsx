import type { Meta, StoryObj } from '@storybook/react';
import { ProductsCount } from './ProductsCount';

const meta: Meta<typeof ProductsCount> = {
  title: 'entities/ProductsCount',
  component: ProductsCount,
};

export default meta;
type Story = StoryObj<typeof ProductsCount>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsCount {...args} />,
};
