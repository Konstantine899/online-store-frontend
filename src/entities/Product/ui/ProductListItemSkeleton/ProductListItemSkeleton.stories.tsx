import type { Meta, StoryObj } from '@storybook/react';
import { ProductListItemSkeleton } from './ProductListItemSkeleton';

const meta: Meta<typeof ProductListItemSkeleton> = {
  title: 'entities/ProductListItemSkeleton',
  component: ProductListItemSkeleton,
};

export default meta;
type Story = StoryObj<typeof ProductListItemSkeleton>;

export const Primary: Story = {
  args: {},
  render: () => <ProductListItemSkeleton />,
};
  