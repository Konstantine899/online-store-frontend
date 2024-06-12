import type { Meta, StoryObj } from '@storybook/react';
import { ProductSpecification } from './ProductSpecification';

const meta: Meta<typeof ProductSpecification> = {
  title: 'entities/ProductDetailsInfo',
  tags: ['autodocs'],
  component: ProductSpecification,
};

export default meta;
type Story = StoryObj<typeof ProductSpecification>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductSpecification {...args} />,
};
