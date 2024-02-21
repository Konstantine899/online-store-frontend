import type { Meta, StoryObj } from '@storybook/react';
import { ProductListNotFound } from './ProductListNotFound';

const meta: Meta<typeof ProductListNotFound> = {
  title: 'entities/ProductListNotFound',
  component: ProductListNotFound,
};

export default meta;
type Story = StoryObj<typeof ProductListNotFound>;

export const Primary: Story = {
  args: {},
  render: () => <ProductListNotFound />,
};
