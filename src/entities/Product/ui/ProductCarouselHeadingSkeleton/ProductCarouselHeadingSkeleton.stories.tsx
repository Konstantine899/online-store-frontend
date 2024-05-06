import type { Meta, StoryObj } from '@storybook/react';
import { ProductCarouselHeadingSkeleton } from './ProductCarouselHeadingSkeleton';

const meta: Meta<typeof ProductCarouselHeadingSkeleton> = {
  title: 'entities/ProductCarouselHeadingSkeleton',
  tags: ['autodocs'],
  component: ProductCarouselHeadingSkeleton,
};

export default meta;
type Story = StoryObj<typeof ProductCarouselHeadingSkeleton>;

export const Primary: Story = {
  args: {},
  render: () => <ProductCarouselHeadingSkeleton />,
};
