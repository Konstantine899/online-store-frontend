import type { Meta, StoryObj } from '@storybook/react';
import { ProductsNotFound } from './ProductsNotFound';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProductsNotFound> = {
  title: 'entities/ProductsNotFound',
  component: ProductsNotFound,
};

export default meta;
type Story = StoryObj<typeof ProductsNotFound>;

export const Primary: Story = {
  args: {},
  render: () => <ProductsNotFound />,
  decorators: [StoreDecorator({ products: { count: 0 } })],
};
