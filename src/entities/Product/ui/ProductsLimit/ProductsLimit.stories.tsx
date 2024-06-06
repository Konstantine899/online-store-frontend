import type { Meta, StoryObj } from '@storybook/react';
import { ProductsLimit } from './ProductsLimit';

const meta: Meta<typeof ProductsLimit> = {
  title: 'entities/ProductsLimit',
  component: ProductsLimit,
};

export default meta;
type Story = StoryObj<typeof ProductsLimit>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsLimit {...args} />,
};
