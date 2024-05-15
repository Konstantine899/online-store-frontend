import type { Meta, StoryObj } from '@storybook/react';
import { ProductCarouselHeading } from './ProductCarouselHeading';

const meta: Meta<typeof ProductCarouselHeading> = {
  title: 'entities/ProductCarouselHeading',
  tags: ['autodocs'],
  component: ProductCarouselHeading,
};

export default meta;
type Story = StoryObj<typeof ProductCarouselHeading>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductCarouselHeading {...args} />,
};
