import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryFilters } from './ProductsByCategoryFilters';

const meta: Meta<typeof ProductsByCategoryFilters> = {
  title: 'stories/ProductsByCategoryFilters',
  component: ProductsByCategoryFilters,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryFilters>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryFilters {...args} />,
};
