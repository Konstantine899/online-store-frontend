import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryAndBrandSortOrder } from './ProductsByCategoryAndBrandSortOrder';

const meta: Meta<typeof ProductsByCategoryAndBrandSortOrder> = {
  title: 'entities/ProductsByCategoryAndBrandSortOrder',
  component: ProductsByCategoryAndBrandSortOrder,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrandSortOrder>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrandSortOrder {...args} />,
};
