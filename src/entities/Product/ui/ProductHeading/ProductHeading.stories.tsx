import type { Meta, StoryObj } from '@storybook/react';
import { ProductHeading } from './ProductHeading';

const meta: Meta<typeof ProductHeading> = {
  title: 'entities/ProductHeading',
  tags: ['autodocs'],
  component: ProductHeading,
};

export default meta;
type Story = StoryObj<typeof ProductHeading>;

export const Primary: Story = {
  args: {},
  render: (args) => <ProductHeading {...args} />,
};
