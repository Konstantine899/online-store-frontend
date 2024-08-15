import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryPaginate } from './ProductsByCategoryPaginate';

const meta: Meta<typeof ProductsByCategoryPaginate> = {
  title: 'features/ProductsByCategoryPaginate',
  component: ProductsByCategoryPaginate,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryPaginate>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryPaginate {...args} />,
};
