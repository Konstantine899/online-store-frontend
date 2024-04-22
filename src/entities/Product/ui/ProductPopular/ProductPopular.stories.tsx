import type { Meta, StoryObj } from '@storybook/react';
import { ProductPopular } from './ProductPopular';

const meta: Meta<typeof ProductPopular> = {
  title: 'entities/ProductPopular',
  component: ProductPopular,
};

export default meta;
type Story = StoryObj<typeof ProductPopular>;

export const Primary: Story = {
  args: {},
  render: () => <ProductPopular />,
};
