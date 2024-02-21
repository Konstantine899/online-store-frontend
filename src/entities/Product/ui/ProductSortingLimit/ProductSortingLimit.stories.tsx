import type { Meta, StoryObj } from '@storybook/react';
import { ProductSortingLimit } from './ProductSortingLimit';

const meta: Meta<typeof ProductSortingLimit> = {
  title: 'entities/SortingLimit',
  component: ProductSortingLimit,
};

export default meta;
type Story = StoryObj<typeof ProductSortingLimit>;

export const Primary: Story = {
  args: {},
  render: () => <ProductSortingLimit />,
};
