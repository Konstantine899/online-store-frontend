import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategorySortOrder } from './ProductsByCategorySortOrder';

const meta: Meta<typeof ProductsByCategorySortOrder> = {
  title: 'entities/ProductsByCategorySortOrder',
  component: ProductsByCategorySortOrder,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategorySortOrder>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategorySortOrder {...args} />,
};
