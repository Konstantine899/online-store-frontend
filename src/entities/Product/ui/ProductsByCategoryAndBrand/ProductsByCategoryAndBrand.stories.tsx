import type { Meta, StoryObj } from '@storybook/react';
import { ProductsByCategoryAndBrand } from './ProductsByCategoryAndBrand';

const meta: Meta<typeof ProductsByCategoryAndBrand> = {
  title: 'entities/ProductsByCategoryAndBrand',
  component: ProductsByCategoryAndBrand,
};

export default meta;
type Story = StoryObj<typeof ProductsByCategoryAndBrand>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrand {...args} />,
};
