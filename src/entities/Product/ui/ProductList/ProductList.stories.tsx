import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'entities/Product',
  component: ProductList,
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Primary: Story = {
  args: {},
  render: () => <ProductList />,
};
