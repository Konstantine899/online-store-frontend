import type { Meta, StoryObj } from '@storybook/react';
import { ProductsSortOrder } from './ProductsSortOrder';

const meta: Meta<typeof ProductsSortOrder> = {
  title: 'entities/ProductsSortOrder',
  component: ProductsSortOrder,
};

export default meta;
type Story = StoryObj<typeof ProductsSortOrder>;

export const Primary: Story = {
  args: {},
  render: () => <ProductsSortOrder />,
};
