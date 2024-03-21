import type { Meta, StoryObj } from '@storybook/react';
import { ProductRating } from './ProductRating';

const meta: Meta<typeof ProductRating> = {
  title: 'entities/ProductRating',
  component: ProductRating,
};

export default meta;
type Story = StoryObj<typeof ProductRating>;

export const Primary: Story = {
  args: {},
  render: () => <ProductRating rating={5} />,
};
