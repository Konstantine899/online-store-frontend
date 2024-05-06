import type { Meta, StoryObj } from '@storybook/react';
import { ProductSummaryCard } from './ProductSummaryCard';

const meta: Meta<typeof ProductSummaryCard> = {
  title: 'entities/ProductSummaryCard',
  tags: ['autodocs'],
  component: ProductSummaryCard,
};

export default meta;
type Story = StoryObj<typeof ProductSummaryCard>;

export const Primary: Story = {
  args: {},
  render: () => <ProductSummaryCard />,
};
