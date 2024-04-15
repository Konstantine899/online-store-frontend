import type { Meta, StoryObj } from '@storybook/react';
import { ProductHeading } from './ProductHeading';

const meta: Meta<typeof ProductHeading> = {
  title: 'entities/ProductHeading',
  component: ProductHeading,
};

export default meta;
type Story = StoryObj<typeof ProductHeading>;

export const Primary: Story = {
  args: {},
  render: () => <ProductHeading />,
};
