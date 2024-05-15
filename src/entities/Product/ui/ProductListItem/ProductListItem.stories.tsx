import type { Meta, StoryObj } from '@storybook/react';
import { ProductListItem } from './ProductListItem';

const meta: Meta<typeof ProductListItem> = {
  title: 'entities/ProductListItem',
  tags: ['autodocs'],
  component: ProductListItem,
};

export default meta;
type Story = StoryObj<typeof ProductListItem>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductListItem {...args} />,
};
