import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryAndBrandCount } from './ProductsByCategoryAndBrandCount';

const meta: Meta<typeof ProductsByCategoryAndBrandCount> = {
  title: 'entities/ProductsByCategoryAndBrandCount',
  component: ProductsByCategoryAndBrandCount,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrandCount>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrandCount {...args} />,
};
