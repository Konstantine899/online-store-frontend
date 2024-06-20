import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryCount } from './ProductsByCategoryCount';

const meta: Meta<typeof ProductsByCategoryCount> = {
  title: 'entities/ProductsByCategoryCount',
  component: ProductsByCategoryCount,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryCount>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryCount {...args} />,
};
