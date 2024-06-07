import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryAndBrandLimit } from './ProductsByCategoryAndBrandLimit';

const meta: Meta<typeof ProductsByCategoryAndBrandLimit> = {
  title: 'entities/ProductsByCategoryAndBrandLimit',
  component: ProductsByCategoryAndBrandLimit,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrandLimit>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrandLimit {...args} />,
};
