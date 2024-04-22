import type { Meta, StoryObj } from '@storybook/react';
import { ProductCarousel } from './ProductCarousel';

const meta: Meta<typeof ProductCarousel> = {
  title: 'entities/ProductCarousel',
  component: ProductCarousel,
};

export default meta;
type Story = StoryObj<typeof ProductCarousel>;

export const Primary: Story = {
  args: {},
  render: () => <ProductCarousel />,
};
