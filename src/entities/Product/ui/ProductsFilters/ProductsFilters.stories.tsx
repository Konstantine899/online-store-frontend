import type { Meta, StoryObj } from '@storybook/react';
import { ProductsFilters } from './ProductsFilters';

const meta: Meta<typeof ProductsFilters> = {
  title: 'entities/ProductsFilters',
  component: ProductsFilters,
};

export default meta;
type Story = StoryObj<typeof ProductsFilters>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsFilters {...args} />,
};
