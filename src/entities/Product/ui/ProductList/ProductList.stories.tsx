import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'entities/Product',
  tags: ['autodocs'],
  component: ProductList,
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductList {...args} />,
};
