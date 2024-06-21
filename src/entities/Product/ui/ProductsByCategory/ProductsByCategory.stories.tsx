import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategory } from './ProductsByCategory';

const meta: Meta<typeof ProductsByCategory> = {
  title: 'entities/ProductsByCategory',
  component: ProductsByCategory,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategory>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategory {...args} />,
};
