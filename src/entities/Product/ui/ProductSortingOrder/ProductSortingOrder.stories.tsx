import type { Meta, StoryObj } from '@storybook/react';
import { ProductSortingOrder } from './ProductSortingOrder';

const meta: Meta<typeof ProductSortingOrder> = {
  title: 'entities/SortingOrder',
  component: ProductSortingOrder,
};

export default meta;
type Story = StoryObj<typeof ProductSortingOrder>;

export const Primary: Story = {
  args: {},
  render: () => <ProductSortingOrder />,
};
