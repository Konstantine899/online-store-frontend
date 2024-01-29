import type { Meta, StoryObj } from '@storybook/react';
import { ProductsListPaginate } from './ProductsListPaginate';

const meta: Meta<typeof ProductsListPaginate> = {
  title: 'entities/ProductsListPaginate',
  component: ProductsListPaginate,
};

export default meta;
type Story = StoryObj<typeof ProductsListPaginate>;

export const Primary: Story = {
  args: {},
  render: () => <ProductsListPaginate />,
};
  