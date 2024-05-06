import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'entities/ProductCard',
  tags: ['autodocs'],
  component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Primary: Story = {
  args: {},
  render: () => <ProductCard />,
};
