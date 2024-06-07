import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryLimit } from './ProductsByCategoryLimit';

const meta: Meta<typeof ProductsByCategoryLimit> = {
  title: 'entities/ProductsByCategoryLimit',
  component: ProductsByCategoryLimit,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryLimit>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryLimit {...args} />,
};
