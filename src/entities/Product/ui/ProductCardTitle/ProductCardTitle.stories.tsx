import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardTitle } from './ProductCardTitle';

const meta: Meta<typeof ProductCardTitle> = {
  title: 'entities/ProductCardTitle',
  component: ProductCardTitle,
};

export default meta;
type Story = StoryObj<typeof ProductCardTitle>;

export const Primary: Story = {
  args: {},
  render: () => <ProductCardTitle />,
};
