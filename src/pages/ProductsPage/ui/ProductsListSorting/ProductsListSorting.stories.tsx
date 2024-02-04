import type { Meta, StoryObj } from '@storybook/react';
import { ProductsListSorting } from './ProductsListSorting';

const meta: Meta<typeof ProductsListSorting> = {
  title: 'entities/ProductsListSorting',
  component: ProductsListSorting,
};

export default meta;
type Story = StoryObj<typeof ProductsListSorting>;

export const Primary: Story = {
  args: {},
  render: () => <ProductsListSorting />,
};
  