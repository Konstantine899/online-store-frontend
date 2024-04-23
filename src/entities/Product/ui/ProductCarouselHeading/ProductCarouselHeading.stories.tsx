import type { Meta, StoryObj } from '@storybook/react';
import { ProductCarouselHeading } from './ProductCarouselHeading';

const meta: Meta<typeof ProductCarouselHeading> = {
  title: 'entities/ProductCarouselHeading',
  component: ProductCarouselHeading,
};

export default meta;
type Story = StoryObj<typeof ProductCarouselHeading>;

export const Primary: Story = {
  args: {},
  render: () => <ProductCarouselHeading />,
};
