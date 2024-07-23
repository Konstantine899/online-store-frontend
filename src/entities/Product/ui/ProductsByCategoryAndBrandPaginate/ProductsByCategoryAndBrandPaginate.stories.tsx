import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryAndBrandPaginate } from './ProductsByCategoryAndBrandPaginate';

const meta: Meta<typeof ProductsByCategoryAndBrandPaginate> = {
  title: 'entities/ProductsByCategoryAndBrandPaginate',
  component: ProductsByCategoryAndBrandPaginate,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrandPaginate>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrandPaginate {...args} />,
};
