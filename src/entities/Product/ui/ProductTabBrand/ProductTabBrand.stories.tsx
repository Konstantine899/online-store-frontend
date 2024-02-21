import type { Meta, StoryObj } from '@storybook/react';
import { ProductTabBrand } from './ProductTabBrand';

const meta: Meta<typeof ProductTabBrand> = {
  title: 'entities/TabBrand',
  component: ProductTabBrand,
};

export default meta;
type Story = StoryObj<typeof ProductTabBrand>;

export const Primary: Story = {
  args: {},
  render: () => <ProductTabBrand />,
};
