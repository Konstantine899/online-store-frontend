import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardSkeleton } from './ProductCardSkeleton';

const meta: Meta<typeof ProductCardSkeleton> = {
  title: 'entities/ProductCardSkeleton',
  component: ProductCardSkeleton,
};

export default meta;
type Story = StoryObj<typeof ProductCardSkeleton>;

export const Primary: Story = {
  args: {},
  render: () => <ProductCardSkeleton />,
};
